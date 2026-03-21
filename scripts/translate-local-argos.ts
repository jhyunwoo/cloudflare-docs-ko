import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

import { translateDocument } from "../src/lib/markdown/processor.js";
import { loadPagesManifest, savePagesManifest } from "../src/lib/manifests.js";
import { loadGlossary } from "../src/lib/translation/glossary.js";
import type { SegmentTranslator } from "../src/lib/translation/provider.js";
import type { LoadedGlossary } from "../src/lib/translation/glossary.js";
import type { PageManifest, TranslationSegment } from "../src/lib/types.js";
import { ensureDir, fileExists, nowIso } from "../src/lib/utils.js";
import { fetchText } from "../src/lib/http.js";
import { UPSTREAM_DIR } from "../src/lib/constants.js";
import { readUpstreamFile } from "../src/lib/upstream/repo.js";

interface CliOptions {
  product?: string;
  workerCount: number;
  workerIndex: number;
  reconcile: boolean;
}

class ArgosTranslator implements SegmentTranslator {
  private counter = 0;

  constructor(private readonly glossary: LoadedGlossary) {}

  async translateSegments(segments: TranslationSegment[]): Promise<Map<string, string>> {
    const translated = new Map<string, string>();
    if (segments.length === 0) {
      return translated;
    }

    const payload = segments.map((segment) => {
      const protectedSegment = this.protect(segment.text);
      return {
        id: segment.id,
        text: protectedSegment.text,
        replacements: protectedSegment.replacements
      };
    });

    const py = [
      "import sys, json",
      "import argostranslate.translate",
      "req = json.loads(sys.stdin.read())",
      'out = [argostranslate.translate.translate(text, "en", "ko") for text in req.get("texts", [])]',
      'sys.stdout.write(json.dumps({"texts": out}, ensure_ascii=False))'
    ].join("; ");

    const result = spawnSync(".venv311/bin/python", ["-c", py], {
      cwd: process.cwd(),
      input: JSON.stringify({ texts: payload.map((entry) => entry.text) }),
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 32
    });

    if (result.status !== 0) {
      throw new Error(result.stderr || `Argos translate failed with status ${result.status}`);
    }

    const parsed = JSON.parse(result.stdout) as { texts?: string[] };
    const translatedTexts = parsed.texts ?? [];

    for (let index = 0; index < payload.length; index += 1) {
      const entry = payload[index];
      const translatedText = translatedTexts[index] ?? entry.text;
      translated.set(entry.id, this.restore(translatedText, entry.replacements));
    }

    return translated;
  }

  private nextToken(): string {
    this.counter += 1;
    return `QXQX${String(this.counter).padStart(4, "0")}XQXQ`;
  }

  private protect(text: string): {
    text: string;
    replacements: Array<[string, string]>;
  } {
    const replacements: Array<[string, string]> = [];
    let protectedText = text;

    const stash = (value: string) => {
      const token = this.nextToken();
      replacements.push([token, value]);
      protectedText = protectedText.split(value).join(token);
    };

    const uniqueMatches = (regex: RegExp) =>
      [
        ...new Set(
          Array.from(protectedText.matchAll(regex), (match) => match[0]).filter(Boolean)
        )
      ] as string[];

    for (const value of uniqueMatches(/`[^`]+`/g)) stash(value);
    for (const value of uniqueMatches(/https?:\/\/[^\s)]+/g)) stash(value);
    for (const value of uniqueMatches(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g)) stash(value);
    for (const value of uniqueMatches(/&[A-Za-z0-9#]+;/g)) stash(value);

    const preferred = Object.entries(this.glossary.preferredKo || {}).sort(
      (a, b) => b[0].length - a[0].length
    );
    for (const [term] of preferred) {
      if (term && protectedText.includes(term)) stash(term);
    }

    const blocked = [...(this.glossary.doNotTranslate || [])].sort((a, b) => b.length - a.length);
    for (const term of blocked) {
      if (term && protectedText.includes(term)) stash(term);
    }

    return { text: protectedText, replacements };
  }

  private restore(text: string, replacements: Array<[string, string]>): string {
    let restored = text;
    for (const [token, value] of replacements) {
      restored = restored.split(token).join(value);
    }
    return restored;
  }
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  if (!options.product) {
    throw new Error("--product is required");
  }

  if (options.reconcile) {
    await reconcile(options.product);
    return;
  }

  const pages = await loadPagesManifest();
  const glossary = await loadGlossary();
  const translator = new ArgosTranslator(glossary);
  const selected = pages
    .filter((page) => page.product === options.product)
    .sort((a, b) => a.url.localeCompare(b.url));

  if (selected.some((page) => page.repoPath)) {
    const upstreamReady = await fileExists(path.join(UPSTREAM_DIR, ".git"));
    if (!upstreamReady) {
      throw new Error("Upstream snapshot is missing. Run npm run map-upstream first.");
    }
  }

  const undone: PageManifest[] = [];
  for (const page of selected) {
    const doneOnDisk = page.status === "done" && (await fileExists(page.outputPath));
    if (!doneOnDisk) {
      undone.push(page);
    }
  }

  const assigned = undone.filter((_, index) => index % options.workerCount === options.workerIndex);
  console.log(
    JSON.stringify(
      {
        mode: "worker",
        product: options.product,
        workerIndex: options.workerIndex,
        workerCount: options.workerCount,
        assigned: assigned.length,
        totalUndone: undone.length
      },
      null,
      2
    )
  );

  let completed = 0;
  for (const page of assigned) {
    try {
      await translatePageWithRetries(page, glossary, translator);
      completed += 1;
      console.log(`[worker ${options.workerIndex}] [${completed}/${assigned.length}] done ${page.url}`);
    } catch (error) {
      console.log(
        `[worker ${options.workerIndex}] [${completed}/${assigned.length}] error ${page.url} :: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
}

function parseArgs(args: string[]): CliOptions {
  const options: CliOptions = {
    workerCount: 1,
    workerIndex: 0,
    reconcile: false
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--product" && args[index + 1]) {
      options.product = args[index + 1];
      index += 1;
    } else if (arg === "--worker-count" && args[index + 1]) {
      options.workerCount = Number(args[index + 1]);
      index += 1;
    } else if (arg === "--worker-index" && args[index + 1]) {
      options.workerIndex = Number(args[index + 1]);
      index += 1;
    } else if (arg === "--reconcile") {
      options.reconcile = true;
    }
  }

  if (!Number.isInteger(options.workerCount) || options.workerCount < 1) {
    throw new Error("--worker-count must be an integer greater than 0");
  }
  if (!Number.isInteger(options.workerIndex) || options.workerIndex < 0) {
    throw new Error("--worker-index must be an integer greater than or equal to 0");
  }
  if (options.workerIndex >= options.workerCount) {
    throw new Error("--worker-index must be smaller than --worker-count");
  }

  return options;
}

async function reconcile(product: string): Promise<void> {
  const pages = await loadPagesManifest();
  let done = 0;
  let pending = 0;

  for (const page of pages) {
    if (page.product !== product) {
      continue;
    }

    if (await fileExists(page.outputPath)) {
      page.status = "done";
      page.lastTranslatedAt = page.lastTranslatedAt ?? nowIso();
      page.lastError = undefined;
      done += 1;
    } else if (page.status !== "done") {
      page.status = "pending";
      pending += 1;
    } else {
      done += 1;
    }
  }

  await savePagesManifest(pages);
  console.log(JSON.stringify({ mode: "reconcile", product, done, pending }, null, 2));
}

async function loadSource(page: PageManifest): Promise<string> {
  if (page.upstreamType === "rendered-md" && /\/404\/$/.test(page.url)) {
    try {
      return await fetchText(page.sourceMdUrl);
    } catch {
      return render404Translation(page);
    }
  }

  if (page.repoPath) {
    return await readUpstreamFile(page.repoPath);
  }

  return await fetchText(page.sourceMdUrl);
}

async function translatePageWithRetries(
  page: PageManifest,
  glossary: LoadedGlossary,
  translator: SegmentTranslator
): Promise<void> {
  let lastError: unknown;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const source = await loadSource(page);
      const translated = await translateDocument({
        page,
        source,
        glossary,
        translator,
        chunkChars: 12000
      });
      await ensureDir(path.dirname(page.outputPath));
      await fs.writeFile(page.outputPath, translated, "utf8");
      return;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
    }
  }

  throw lastError instanceof Error ? lastError : new Error(String(lastError));
}

function render404Translation(page: PageManifest): string {
  const title = page.title
    ? page.title.replace("Page Not Found", "페이지를 찾을 수 없음")
    : "404 - 페이지를 찾을 수 없음";
  return `---\n` +
    `title: ${JSON.stringify(title)}\n` +
    `translation_locale: "ko-KR"\n` +
    `translation_source_html: ${JSON.stringify(page.sourceHtmlUrl)}\n` +
    `translation_source_md: ${JSON.stringify(page.sourceMdUrl)}\n` +
    `translation_source_kind: ${JSON.stringify(page.upstreamType)}\n` +
    `translation_snapshot: "2026-03-14"\n` +
    `---\n\n` +
    `# 404\n\n` +
    `요청한 페이지를 찾을 수 없습니다.\n`;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

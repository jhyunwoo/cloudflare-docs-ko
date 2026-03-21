import fs from "node:fs/promises";
import path from "node:path";

import { loadTranslationConfig } from "../src/lib/config.js";
import { loadPagesManifest, savePagesManifest } from "../src/lib/manifests.js";
import { translateDocument } from "../src/lib/markdown/processor.js";
import { TranslationStateStore } from "../src/lib/state.js";
import { loadGlossary } from "../src/lib/translation/glossary.js";
import { OpenAICompatibleTranslator } from "../src/lib/translation/provider.js";
import type { PageManifest } from "../src/lib/types.js";
import { ensureDir, fileExists, nowIso, runWithConcurrency } from "../src/lib/utils.js";
import { ensureUpstreamSnapshot, readUpstreamFile } from "../src/lib/upstream/repo.js";
import { fetchText } from "../src/lib/http.js";

interface CliOptions {
  resume: boolean;
  product?: string;
  limit?: number;
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const config = await loadTranslationConfig();
  const glossary = await loadGlossary();
  const translator = new OpenAICompatibleTranslator(config, glossary);
  const pages = await loadPagesManifest();

  if (pages.length === 0) {
    throw new Error("pages.jsonl is empty. Run npm run inventory first.");
  }

  if (pages.some((page) => page.repoPath)) {
    await ensureUpstreamSnapshot();
  }

  const stateStore = await TranslationStateStore.open();
  try {
    const stateByUrl = new Map(stateStore.listRows().map((row) => [row.url, row]));
    const selected = await selectPages(pages, stateByUrl, options);
    const selectedUrls = new Set(selected.map((page) => page.url));

    await runWithConcurrency(selected, config.concurrency, async (page) => {
      try {
        const source = await loadSource(page);
        const translated = await translateDocument({
          page,
          source,
          glossary,
          translator,
          chunkChars: config.chunkChars
        });
        await ensureDir(path.dirname(page.outputPath));
        await fs.writeFile(page.outputPath, translated, "utf8");

        stateStore.upsert({
          url: page.url,
          contentHash: page.contentHash,
          status: "done",
          outputPath: page.outputPath,
          lastTranslatedAt: nowIso(),
          lastError: undefined
        });
      } catch (error) {
        stateStore.upsert({
          url: page.url,
          contentHash: page.contentHash,
          status: "error",
          outputPath: page.outputPath,
          lastError: (error as Error).message
        });
      }
    });

    const stateRows = new Map(stateStore.listRows().map((row) => [row.url, row]));
    const merged = pages.map((page) => {
      if (!selectedUrls.has(page.url) && page.status === "done") {
        return page;
      }

      const state = stateRows.get(page.url);
      if (!state || state.contentHash !== page.contentHash) {
        return page;
      }

      return {
        ...page,
        status: state.status,
        lastTranslatedAt: state.lastTranslatedAt,
        lastError: state.lastError
      };
    });

    await savePagesManifest(merged);
    const doneCount = merged.filter((page) => page.status === "done").length;
    console.log(`Translation run complete. done=${doneCount} selected=${selected.length}`);
  } finally {
    stateStore.close();
  }
}

function parseArgs(args: string[]): CliOptions {
  const options: CliOptions = {
    resume: false
  };

  for (let index = 0; index < args.length; index += 1) {
    if (args[index] === "--resume") {
      options.resume = true;
    } else if (args[index] === "--product" && args[index + 1]) {
      options.product = args[index + 1];
      index += 1;
    } else if (args[index] === "--limit" && args[index + 1]) {
      options.limit = Number(args[index + 1]);
      index += 1;
    }
  }

  return options;
}

async function selectPages(
  pages: PageManifest[],
  stateByUrl: Map<string, { contentHash: string; status: string; outputPath: string }>,
  options: CliOptions
): Promise<PageManifest[]> {
  let selected = pages;

  if (options.product) {
    selected = selected.filter((page) => page.product === options.product);
  }

  const filtered: PageManifest[] = [];
  for (const page of selected) {
    if (await shouldTranslate(page, stateByUrl.get(page.url), options.resume)) {
      filtered.push(page);
    }
  }

  selected = filtered;

  if (typeof options.limit === "number" && Number.isFinite(options.limit)) {
    selected = selected.slice(0, options.limit);
  }

  return selected;
}

async function shouldTranslate(
  page: PageManifest,
  state:
    | {
        contentHash: string;
        status: string;
        outputPath: string;
      }
    | undefined,
  resume: boolean
): Promise<boolean> {
  if (!resume) {
    return true;
  }

  if (!state) {
    return true;
  }

  if (state.contentHash !== page.contentHash) {
    return true;
  }

  if (state.status !== "done") {
    return true;
  }

  return !(await fileExists(state.outputPath));
}

async function loadSource(page: PageManifest): Promise<string> {
  if (page.repoPath) {
    return await readUpstreamFile(page.repoPath);
  }

  return await fetchText(page.sourceMdUrl);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

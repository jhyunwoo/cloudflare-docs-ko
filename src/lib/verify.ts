import fs from "node:fs/promises";

import { VERIFY_REPORT_PATH } from "./constants.js";
import { countStructuralNodes, extractHumanReadableText, parseMarkdown } from "./markdown/processor.js";
import type { LoadedGlossary } from "./translation/glossary.js";
import type { PageManifest, VerifyReport, VerifyWarning } from "./types.js";
import { fetchText } from "./http.js";
import { readUpstreamFile } from "./upstream/repo.js";
import { nowIso, writeJsonFile } from "./utils.js";

export async function verifyCorpus(
  pages: PageManifest[],
  expectedPageCount: number,
  glossary: LoadedGlossary
): Promise<VerifyReport> {
  const parseFailures: string[] = [];
  const structureFailures: string[] = [];
  const warnings: VerifyWarning[] = [];
  let translatedPageCount = 0;

  if (pages.length !== expectedPageCount) {
    structureFailures.push(
      `Manifest page count mismatch: expected ${expectedPageCount}, found ${pages.length}`
    );
  }

  for (const page of pages) {
    if (page.status !== "done") {
      structureFailures.push(`Page status is not done: ${page.url} (${page.status})`);
      continue;
    }

    translatedPageCount += 1;

    let output: string;
    try {
      output = await fs.readFile(page.outputPath, "utf8");
    } catch {
      warnings.push({
        url: page.url,
        type: "missing-output",
        detail: page.outputPath
      });
      structureFailures.push(`Missing output: ${page.outputPath}`);
      continue;
    }

    const mdx = page.outputPath.endsWith(".mdx");

    try {
      parseMarkdown(output, mdx);
    } catch (error) {
      parseFailures.push(`${page.url}: ${(error as Error).message}`);
      continue;
    }

    const source = await loadSourceForVerification(page);
    const sourceStructure = countStructuralNodes(source, page.upstreamType === "repo-mdx");
    const outputStructure = countStructuralNodes(output, mdx);

    if (
      sourceStructure.headings !== outputStructure.headings ||
      sourceStructure.tables !== outputStructure.tables ||
      sourceStructure.codeBlocks !== outputStructure.codeBlocks
    ) {
      structureFailures.push(
        `${page.url}: structure mismatch (source h/t/c ${sourceStructure.headings}/${sourceStructure.tables}/${sourceStructure.codeBlocks}, output ${outputStructure.headings}/${outputStructure.tables}/${outputStructure.codeBlocks})`
      );
    }

    const residueWords = extractHumanReadableText(output, mdx)
      .match(/[A-Za-z][A-Za-z0-9.+/-]*/g)
      ?.filter((word) => !shouldIgnoreEnglishWord(word, glossary)) ?? [];
    if (residueWords.length > 25) {
      warnings.push({
        url: page.url,
        type: "english-residue",
        detail: residueWords.slice(0, 25).join(", ")
      });
    }
  }

  const report: VerifyReport = {
    generatedAt: nowIso(),
    expectedPageCount,
    manifestPageCount: pages.length,
    translatedPageCount,
    parseFailures,
    structureFailures,
    warnings
  };

  await writeJsonFile(VERIFY_REPORT_PATH, report);
  return report;
}

async function loadSourceForVerification(page: PageManifest): Promise<string> {
  if (page.repoPath) {
    return await readUpstreamFile(page.repoPath);
  }

  try {
    return await fetchText(page.sourceMdUrl);
  } catch (error) {
    if (page.upstreamType === "rendered-md" && /\/404\/index\.md$/.test(page.sourceMdUrl)) {
      return "# 404\n\nPage not found.\n";
    }

    throw error;
  }
}

function shouldIgnoreEnglishWord(word: string, glossary: LoadedGlossary): boolean {
  if (word.length <= 1) {
    return true;
  }

  if (/^(https?|www)\b/i.test(word)) {
    return true;
  }

  const normalized = word.replace(/[()[\],.:;!?'"`]/g, "");
  return glossary.doNotTranslate.some((entry) => entry.toLowerCase() === normalized.toLowerCase());
}

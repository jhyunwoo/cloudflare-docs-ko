import { loadPagesManifest, loadProductsManifest } from "../src/lib/manifests.js";
import { ensureUpstreamSnapshot } from "../src/lib/upstream/repo.js";
import { loadGlossary } from "../src/lib/translation/glossary.js";
import { verifyCorpus } from "../src/lib/verify.js";

async function main(): Promise<void> {
  const [productsFile, pages, glossary] = await Promise.all([
    loadProductsManifest(),
    loadPagesManifest(),
    loadGlossary()
  ]);

  if (!productsFile) {
    throw new Error("products.json is missing. Run npm run inventory first.");
  }

  if (pages.some((page) => page.repoPath)) {
    await ensureUpstreamSnapshot();
  }

  const report = await verifyCorpus(pages, productsFile.snapshot.expectedPageCount, glossary);

  if (
    report.parseFailures.length > 0 ||
    report.structureFailures.length > 0 ||
    report.translatedPageCount !== report.expectedPageCount
  ) {
    console.error(JSON.stringify(report, null, 2));
    process.exitCode = 1;
    return;
  }

  console.log(
    `Verification passed for ${report.translatedPageCount}/${report.expectedPageCount} pages with ${report.warnings.length} warnings`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

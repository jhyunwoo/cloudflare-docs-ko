import { buildInventory } from "../src/lib/inventory.js";
import { loadPagesManifest, savePagesManifest, saveProductsManifest } from "../src/lib/manifests.js";
import { TranslationStateStore } from "../src/lib/state.js";
import { mergeExistingPageState } from "../src/lib/manifests.js";
import { ensureUpstreamSnapshot } from "../src/lib/upstream/repo.js";
import { applyUpstreamMapping } from "../src/lib/upstream/mapping.js";

async function main(): Promise<void> {
  const [existingPages, stateStore] = await Promise.all([
    loadPagesManifest(),
    TranslationStateStore.open()
  ]);

  try {
    const { productsFile, pages } = await buildInventory();
    const ref = await ensureUpstreamSnapshot();
    const mappedPages = (await applyUpstreamMapping(pages)).map((row) =>
      row.repoPath ? { ...row, repoRef: ref } : row
    );

    const mergedPages = mergeExistingPageState(mappedPages, existingPages, stateStore.listRows());

    await saveProductsManifest(productsFile);
    await savePagesManifest(mergedPages);

    console.log(
      `Inventory complete: ${productsFile.products.length} products, ${mergedPages.length} pages, expected ${productsFile.snapshot.expectedPageCount}`
    );
  } finally {
    stateStore.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

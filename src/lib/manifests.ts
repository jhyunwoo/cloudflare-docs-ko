import { PAGES_MANIFEST_PATH, PRODUCTS_MANIFEST_PATH } from "./constants.js";
import type { PageManifest, ProductsManifestFile, StateRow } from "./types.js";
import { readJsonFile, readJsonLinesFile, writeJsonFile, writeJsonLinesFile } from "./utils.js";

export async function loadProductsManifest(): Promise<ProductsManifestFile | undefined> {
  return await readJsonFile<ProductsManifestFile>(PRODUCTS_MANIFEST_PATH);
}

export async function saveProductsManifest(value: ProductsManifestFile): Promise<void> {
  await writeJsonFile(PRODUCTS_MANIFEST_PATH, value);
}

export async function loadPagesManifest(): Promise<PageManifest[]> {
  return await readJsonLinesFile<PageManifest>(PAGES_MANIFEST_PATH);
}

export async function savePagesManifest(rows: PageManifest[]): Promise<void> {
  await writeJsonLinesFile(PAGES_MANIFEST_PATH, rows);
}

export function mergeExistingPageState(
  nextRows: PageManifest[],
  existingRows: PageManifest[],
  stateRows: StateRow[]
): PageManifest[] {
  const existingByUrl = new Map(existingRows.map((row) => [row.url, row]));
  const stateByUrl = new Map(stateRows.map((row) => [row.url, row]));

  return nextRows.map((row) => {
    const current = existingByUrl.get(row.url);
    const state = stateByUrl.get(row.url);

    if (state && state.contentHash === row.contentHash) {
      return {
        ...row,
        status: state.status,
        lastTranslatedAt: state.lastTranslatedAt,
        lastError: state.lastError
      };
    }

    if (current && current.contentHash === row.contentHash) {
      return {
        ...row,
        status: current.status,
        lastTranslatedAt: current.lastTranslatedAt,
        lastError: current.lastError
      };
    }

    return row;
  });
}


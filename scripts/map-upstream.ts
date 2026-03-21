import { ensureUpstreamSnapshot } from "../src/lib/upstream/repo.js";
import { applyUpstreamMapping } from "../src/lib/upstream/mapping.js";
import { loadPagesManifest, savePagesManifest } from "../src/lib/manifests.js";

async function main(): Promise<void> {
  const rows = await loadPagesManifest();

  if (rows.length === 0) {
    throw new Error("pages.jsonl is empty. Run npm run inventory first.");
  }

  const ref = await ensureUpstreamSnapshot();
  const mapped = await applyUpstreamMapping(rows);
  const finalized = mapped.map((row) =>
    row.repoPath ? { ...row, repoRef: ref, lastError: row.lastError } : row
  );

  await savePagesManifest(finalized);
  console.log(`Updated upstream mapping for ${finalized.length} pages at ${ref}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


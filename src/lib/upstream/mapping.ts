import path from "node:path";

import type { PageManifest } from "../types.js";
import { repoPathToOutputPath, repoPathToRoutePath } from "../pathing.js";
import { sha256 } from "../utils.js";
import { listUpstreamContentFiles, readUpstreamFile } from "./repo.js";

export async function buildUpstreamRouteIndex(): Promise<
  Map<
    string,
    {
      repoPath: string;
      repoRef: string;
      upstreamType: "repo-md" | "repo-mdx";
      outputPath: string;
      contentHash: string;
    }
  >
> {
  const files = await listUpstreamContentFiles();
  const index = new Map<
    string,
    {
      repoPath: string;
      repoRef: string;
      upstreamType: "repo-md" | "repo-mdx";
      outputPath: string;
      contentHash: string;
    }
  >();

  for (const repoPath of files) {
    const routePath = repoPathToRoutePath(repoPath);
    const outputPath = repoPathToOutputPath(repoPath);
    const content = await readUpstreamFile(repoPath);

    if (!routePath || !outputPath) {
      continue;
    }

    index.set(routePath, {
      repoPath,
      repoRef: "production",
      upstreamType: path.extname(repoPath) === ".mdx" ? "repo-mdx" : "repo-md",
      outputPath,
      contentHash: sha256(content)
    });
  }

  return index;
}

export async function applyUpstreamMapping(rows: PageManifest[]): Promise<PageManifest[]> {
  const index = await buildUpstreamRouteIndex();

  return rows.map((row) => {
    const mapped = index.get(new URL(row.url).pathname.endsWith("/") ? new URL(row.url).pathname : `${new URL(row.url).pathname}/`);

    if (!mapped) {
      return {
        ...row,
        upstreamType: "rendered-md",
        repoPath: undefined,
        repoRef: undefined,
        outputPath: row.outputPath.endsWith(".mdx") ? row.outputPath.replace(/\.mdx$/, ".md") : row.outputPath
      };
    }

    return {
      ...row,
      upstreamType: mapped.upstreamType,
      repoPath: mapped.repoPath,
      repoRef: mapped.repoRef,
      outputPath: mapped.outputPath,
      contentHash: mapped.contentHash
    };
  });
}

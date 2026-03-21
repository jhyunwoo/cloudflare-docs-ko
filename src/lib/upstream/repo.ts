import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

import fg from "fast-glob";

import { UPSTREAM_DIR, UPSTREAM_REF, UPSTREAM_REPO_URL } from "../constants.js";
import { ensureDir, fileExists, toPosixPath } from "../utils.js";

export async function ensureUpstreamSnapshot(): Promise<string> {
  const gitDir = path.join(UPSTREAM_DIR, ".git");
  const hasRepo = await fileExists(gitDir);

  await ensureDir(path.dirname(UPSTREAM_DIR));

  if (!hasRepo) {
    execFileSync("git", ["clone", "--depth", "1", "--branch", UPSTREAM_REF, UPSTREAM_REPO_URL, UPSTREAM_DIR], {
      stdio: "inherit"
    });
  } else {
    execFileSync("git", ["-C", UPSTREAM_DIR, "fetch", "origin", UPSTREAM_REF, "--depth", "1"], {
      stdio: "inherit"
    });
    execFileSync("git", ["-C", UPSTREAM_DIR, "switch", UPSTREAM_REF], {
      stdio: "inherit"
    });
    execFileSync("git", ["-C", UPSTREAM_DIR, "pull", "--ff-only", "--depth", "1", "origin", UPSTREAM_REF], {
      stdio: "inherit"
    });
  }

  return (
    execFileSync("git", ["-C", UPSTREAM_DIR, "rev-parse", "HEAD"], {
      encoding: "utf8"
    }).trim()
  );
}

export async function listUpstreamContentFiles(): Promise<string[]> {
  const entries = await fg(
    [
      "src/content/docs/**/*.{md,mdx}",
      "src/content/changelog/**/*.{md,mdx}",
      "src/content/compatibility-flags/**/*.{md,mdx}"
    ],
    {
      cwd: UPSTREAM_DIR,
      onlyFiles: true
    }
  );

  return entries.map((entry) => toPosixPath(entry)).sort();
}

export async function readUpstreamFile(repoPath: string): Promise<string> {
  return await fs.readFile(path.join(UPSTREAM_DIR, repoPath), "utf8");
}


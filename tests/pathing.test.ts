import path from "node:path";

import { describe, expect, it } from "vitest";

import {
  inferProductFromUrl,
  repoPathToOutputPath,
  repoPathToRoutePath,
  routePathToOutputPath,
  sourceUrlToOutputPath,
  urlToRoutePath
} from "../src/lib/pathing.js";
import { DOCS_DIR } from "../src/lib/constants.js";

describe("pathing helpers", () => {
  it("normalizes URLs to route paths with trailing slash", () => {
    expect(urlToRoutePath("https://developers.cloudflare.com/workers/index.md")).toBe("/workers/index.md/");
    expect(urlToRoutePath("https://developers.cloudflare.com/workers")).toBe("/workers/");
  });

  it("produces mirrored output paths under docs/ko", () => {
    const result = sourceUrlToOutputPath("https://developers.cloudflare.com/workers/get-started/", ".mdx");
    expect(result).toBe(path.join(DOCS_DIR, "workers/get-started", "index.mdx"));

    const nested = routePathToOutputPath("/changelog/workers/", ".md");
    expect(nested).toBe(path.join(DOCS_DIR, "changelog/workers", "index.md"));
  });

  it("infers product slugs from URLs", () => {
    expect(inferProductFromUrl("https://developers.cloudflare.com/workers/some/path/")).toBe("workers");
    expect(inferProductFromUrl("https://developers.cloudflare.com/changelog/workers/2025-01-01/")).toBe("workers");
    expect(
      inferProductFromUrl("https://developers.cloudflare.com/workers/platform/compatibility-flags/foo/")
    ).toBe("workers");
  });

  it("maps repo paths to route paths and output paths", () => {
    const mdxRoute = repoPathToRoutePath("src/content/docs/workers/get-started/index.mdx");
    expect(mdxRoute).toBe("/workers/get-started/");
    expect(repoPathToOutputPath("src/content/docs/workers/get-started/index.mdx")).toBe(
      path.join(DOCS_DIR, "workers/get-started", "index.mdx")
    );

    const mdRoute = repoPathToRoutePath("src/content/changelog/workers/2026-01-01-update.md");
    expect(mdRoute).toBe("/changelog/workers/2026-01-01-update/");
    expect(repoPathToOutputPath("src/content/compatibility-flags/foo.md")).toBe(
      path.join(DOCS_DIR, "workers/platform/compatibility-flags/foo", "index.md")
    );
  });
});

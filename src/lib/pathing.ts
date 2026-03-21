import path from "node:path";

import { DOCS_DIR } from "./constants.js";
import { normalizeUrlPath, stripTrailingSlash, toPosixPath, withTrailingSlash } from "./utils.js";

export interface UpstreamMapping {
  routePath: string;
  repoPath: string;
  upstreamType: "repo-md" | "repo-mdx";
}

export function inferProductFromUrl(url: string): string {
  const parsed = new URL(url);
  const parts = parsed.pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return "root";
  }

  if (parts[0] === "changelog" && parts.length > 1) {
    return parts[1];
  }

  if (parts[0] === "workers" && parts[1] === "platform" && parts[2] === "compatibility-flags") {
    return "workers";
  }

  return parts[0];
}

export function urlToRoutePath(url: string): string {
  const parsed = new URL(url);
  return withTrailingSlash(parsed.pathname);
}

export function routePathToOutputPath(routePath: string, extension: ".md" | ".mdx"): string {
  const normalized = normalizeUrlPath(routePath);
  const clean = normalized === "/" ? "" : stripTrailingSlash(normalized).slice(1);
  return clean
    ? path.join(DOCS_DIR, clean, `index${extension}`)
    : path.join(DOCS_DIR, `index${extension}`);
}

export function sourceUrlToOutputPath(url: string, extension: ".md" | ".mdx"): string {
  return routePathToOutputPath(urlToRoutePath(url), extension);
}

export function repoPathToRoutePath(repoPath: string): string | undefined {
  const normalized = toPosixPath(repoPath).replace(/^src\/content\//, "");

  if (normalized.startsWith("docs/")) {
    return contentPathToRoutePath(normalized.slice("docs/".length));
  }

  if (normalized.startsWith("changelog/")) {
    return collectionPathToRoutePath(normalized.slice("changelog/".length), "/changelog");
  }

  if (normalized.startsWith("compatibility-flags/")) {
    const slug = normalized.replace(/^compatibility-flags\//, "").replace(/\.(md|mdx)$/, "");
    return withTrailingSlash(`/workers/platform/compatibility-flags/${slug}`);
  }

  return undefined;
}

function contentPathToRoutePath(relativePath: string): string {
  return collectionPathToRoutePath(relativePath, "");
}

function collectionPathToRoutePath(relativePath: string, prefix: string): string {
  if (relativePath.endsWith("/index.md") || relativePath.endsWith("/index.mdx")) {
    const dir = relativePath.replace(/\/index\.mdx?$/, "");
    return withTrailingSlash(`${prefix}/${dir}`.replace(/\/+/g, "/"));
  }

  const withoutExt = relativePath.replace(/\.(md|mdx)$/, "");
  return withTrailingSlash(`${prefix}/${withoutExt}`.replace(/\/+/g, "/"));
}

export function repoPathToOutputPath(repoPath: string): string | undefined {
  const routePath = repoPathToRoutePath(repoPath);
  if (!routePath) {
    return undefined;
  }

  const extension = repoPath.endsWith(".mdx") ? ".mdx" : ".md";
  return routePathToOutputPath(routePath, extension);
}


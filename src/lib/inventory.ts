import matter from "gray-matter";

import { DEVELOPERS_BASE_URL, ROOT_LLMS_FULL_URL, ROOT_LLMS_TXT_URL } from "./constants.js";
import { fetchText } from "./http.js";
import { inferProductFromUrl, sourceUrlToOutputPath } from "./pathing.js";
import type { PageManifest, ProductManifest, ProductsManifestFile, SnapshotMeta } from "./types.js";
import { nowIso, runWithConcurrency, sha256 } from "./utils.js";

interface LlmsEntry {
  title: string;
  url: string;
  description?: string;
}

interface ParsedPageFrontmatter {
  title?: string;
  description?: string;
  source_url?: {
    html?: string;
    md?: string;
  };
}

export async function buildInventory(): Promise<{
  productsFile: ProductsManifestFile;
  pages: PageManifest[];
}> {
  const rootLlms = await fetchText(ROOT_LLMS_TXT_URL);
  const rootFull = await fetchText(ROOT_LLMS_FULL_URL);

  const products = parseProducts(rootLlms);
  const pagesByUrl = new Map<string, PageManifest>();
  const rootPages = parseLlmsFullPages(rootFull);

  for (const page of rootPages) {
    pagesByUrl.set(page.url, page);
  }

  const perProductPageEntries = await runWithConcurrency(products, 3, async (product) => {
    const content = await fetchText(product.llmsUrl);
    return { product, entries: parseLlmsLinks(content) };
  });

  for (const { product, entries } of perProductPageEntries) {
    product.pageCountFromLlms = entries.length;

    for (const entry of entries) {
      const url = stripIndexMd(entry.url);
      const existing = pagesByUrl.get(url);
      const next: PageManifest = {
        url,
        product: product.slug,
        title: entry.title,
        description: entry.description,
        sourceMdUrl: entry.url,
        sourceHtmlUrl: url,
        upstreamType: "rendered-md",
        contentHash: existing?.contentHash ?? sha256(`${entry.title}\n${entry.description ?? ""}\n${entry.url}`),
        outputPath: sourceUrlToOutputPath(url, ".md"),
        status: existing?.status ?? "pending",
        lastTranslatedAt: existing?.lastTranslatedAt,
        lastError: existing?.lastError
      };
      pagesByUrl.set(url, existing ? { ...existing, ...next } : next);
    }
  }

  const pages = [...pagesByUrl.values()].sort((a, b) => a.url.localeCompare(b.url));

  const snapshot: SnapshotMeta = {
    generatedAt: nowIso(),
    rootLlmsTxtUrl: ROOT_LLMS_TXT_URL,
    rootLlmsFullUrl: ROOT_LLMS_FULL_URL,
    expectedPageCount: rootPages.length,
    discoveredPageCount: pages.length,
    productCount: products.length,
    upstreamRepoUrl: "https://github.com/cloudflare/cloudflare-docs.git",
    upstreamRef: "production"
  };

  return {
    productsFile: {
      snapshot,
      products
    },
    pages
  };
}

function parseProducts(markdown: string): ProductManifest[] {
  const lines = markdown.split("\n");
  let category = "Uncategorized";
  const products: ProductManifest[] = [];

  for (const line of lines) {
    const headingMatch = /^##\s+(.+)$/.exec(line.trim());
    if (headingMatch) {
      category = headingMatch[1].trim();
      continue;
    }

    const match =
      /^- \[(.+?)\]\((https:\/\/developers\.cloudflare\.com\/([^/]+)\/llms\.txt)\)(?::\s+(.+))?$/.exec(
        line.trim()
      );

    if (!match) {
      continue;
    }

    const [, title, llmsUrl, slug, description] = match;
    products.push({
      slug,
      title,
      category,
      description,
      llmsUrl,
      llmsFullUrl: `${DEVELOPERS_BASE_URL}/${slug}/llms-full.txt`,
      pageCountFromLlms: 0
    });
  }

  return products;
}

function parseLlmsLinks(markdown: string): LlmsEntry[] {
  const entries: LlmsEntry[] = [];

  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trim();
    const match = /^- \[(.+?)\]\((https:\/\/developers\.cloudflare\.com\/.+?\/index\.md)\)(?::\s+(.+))?$/.exec(line);
    if (!match) {
      continue;
    }

    entries.push({
      title: match[1],
      url: match[2],
      description: match[3]
    });
  }

  return entries;
}

function parseLlmsFullPages(markdown: string): PageManifest[] {
  const blocks = markdown
    .split("</page>")
    .map((block) => block.replace(/<page>\s*/g, "").trim())
    .filter(Boolean);

  const pages: PageManifest[] = [];

  for (const block of blocks) {
    const parsed = matter(block);
    const frontmatter = parsed.data as ParsedPageFrontmatter;
    const sourceHtmlUrl = frontmatter.source_url?.html;
    const sourceMdUrl = frontmatter.source_url?.md;

    if (!sourceHtmlUrl || !sourceMdUrl) {
      continue;
    }

    pages.push({
      url: ensureHtmlUrl(sourceHtmlUrl),
      product: inferProductFromUrl(sourceHtmlUrl),
      title: frontmatter.title ?? new URL(sourceHtmlUrl).pathname,
      description: frontmatter.description,
      sourceMdUrl,
      sourceHtmlUrl: ensureHtmlUrl(sourceHtmlUrl),
      upstreamType: "rendered-md",
      contentHash: sha256(block),
      outputPath: sourceUrlToOutputPath(sourceHtmlUrl, ".md"),
      status: "pending"
    });
  }

  return pages;
}

function ensureHtmlUrl(value: string): string {
  return value.endsWith("/") ? value : `${value}/`;
}

function stripIndexMd(value: string): string {
  return value.replace(/index\.md$/, "");
}

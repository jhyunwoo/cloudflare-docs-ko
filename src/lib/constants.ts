import path from "node:path";

export const ROOT_DIR = process.cwd();
export const CACHE_DIR = path.join(ROOT_DIR, ".cache");
export const STATE_DIR = path.join(ROOT_DIR, ".state");
export const DATA_DIR = path.join(ROOT_DIR, "data");
export const MANIFESTS_DIR = path.join(DATA_DIR, "manifests");
export const GLOSSARY_DIR = path.join(DATA_DIR, "glossary");
export const DOCS_DIR = path.join(ROOT_DIR, "docs", "ko");
export const UPSTREAM_DIR = path.join(CACHE_DIR, "upstream", "cloudflare-docs");
export const STATE_DB_PATH = path.join(STATE_DIR, "translation.sqlite");
export const PRODUCTS_MANIFEST_PATH = path.join(MANIFESTS_DIR, "products.json");
export const PAGES_MANIFEST_PATH = path.join(MANIFESTS_DIR, "pages.jsonl");
export const VERIFY_REPORT_PATH = path.join(MANIFESTS_DIR, "verify-report.json");

export const ROOT_LLMS_TXT_URL = "https://developers.cloudflare.com/llms.txt";
export const ROOT_LLMS_FULL_URL = "https://developers.cloudflare.com/llms-full.txt";
export const DEVELOPERS_BASE_URL = "https://developers.cloudflare.com";
export const UPSTREAM_REPO_URL = "https://github.com/cloudflare/cloudflare-docs.git";
export const UPSTREAM_REF = "production";

export const DEFAULT_USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36";

export const FRONTMATTER_TRANSLATABLE_KEYS = new Set([
  "title",
  "description",
  "label",
  "content",
  "message",
  "header",
  "alt"
]);

export const JSX_TRANSLATABLE_ATTRIBUTES = new Set([
  "label",
  "title",
  "description",
  "header",
  "alt",
  "caption"
]);

export const COMMENT_TRANSLATABLE_LANGUAGES = new Set([
  "js",
  "jsx",
  "ts",
  "tsx",
  "javascript",
  "typescript",
  "python",
  "py",
  "bash",
  "sh",
  "shell",
  "jsonc",
  "yaml",
  "yml",
  "html",
  "mdx"
]);


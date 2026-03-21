export type UpstreamType = "repo-md" | "repo-mdx" | "rendered-md";
export type PageStatus = "pending" | "done" | "error" | "skipped";

export interface TranslationConfig {
  provider: "openai-compatible";
  baseUrl: string;
  model: string;
  apiKeyEnvVar: string;
  concurrency: number;
  retries: number;
  chunkChars: number;
}

export interface SnapshotMeta {
  generatedAt: string;
  rootLlmsTxtUrl: string;
  rootLlmsFullUrl: string;
  expectedPageCount: number;
  discoveredPageCount: number;
  productCount: number;
  upstreamRepoUrl: string;
  upstreamRef: string;
}

export interface ProductManifest {
  slug: string;
  title: string;
  category: string;
  description?: string;
  llmsUrl: string;
  llmsFullUrl: string;
  pageCountFromLlms: number;
}

export interface ProductsManifestFile {
  snapshot: SnapshotMeta;
  products: ProductManifest[];
}

export interface PageManifest {
  url: string;
  product: string;
  title: string;
  description?: string;
  sourceMdUrl: string;
  sourceHtmlUrl: string;
  upstreamType: UpstreamType;
  repoPath?: string;
  repoRef?: string;
  contentHash: string;
  outputPath: string;
  status: PageStatus;
  lastTranslatedAt?: string;
  lastError?: string;
}

export interface StateRow {
  url: string;
  contentHash: string;
  status: PageStatus;
  outputPath: string;
  lastTranslatedAt?: string;
  lastError?: string;
  updatedAt: string;
}

export interface TranslationSegment {
  id: string;
  text: string;
  kind: "text" | "frontmatter" | "code-comment";
  context?: string;
}

export interface TranslationResponse {
  translations: Array<{
    id: string;
    text: string;
  }>;
}

export interface VerifyWarning {
  url: string;
  type: "english-residue" | "missing-output";
  detail: string;
}

export interface VerifyReport {
  generatedAt: string;
  expectedPageCount: number;
  manifestPageCount: number;
  translatedPageCount: number;
  parseFailures: string[];
  structureFailures: string[];
  warnings: VerifyWarning[];
}


import matter from "gray-matter";
import { toString } from "mdast-util-to-string";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";

import {
  COMMENT_TRANSLATABLE_LANGUAGES,
  FRONTMATTER_TRANSLATABLE_KEYS,
  JSX_TRANSLATABLE_ATTRIBUTES
} from "../constants.js";
import type { PageManifest, TranslationSegment, UpstreamType } from "../types.js";
import { runWithConcurrency } from "../utils.js";
import { translateCodeComments } from "../translation/comments.js";
import type { LoadedGlossary } from "../translation/glossary.js";
import type { SegmentTranslator } from "../translation/provider.js";

type MutableSegment = {
  id: string;
  text: string;
  kind: TranslationSegment["kind"];
  context?: string;
  apply: (value: string) => void;
};

type RootNode = {
  children: unknown[];
};

type GenericNode = {
  type: string;
  value?: string;
  depth?: number;
  alt?: string;
  lang?: string;
  children?: GenericNode[];
  attributes?: Array<{ type?: string; name?: string; value?: unknown }>;
};

export async function translateDocument(options: {
  page: PageManifest;
  source: string;
  glossary: LoadedGlossary;
  translator: SegmentTranslator;
  chunkChars: number;
}): Promise<string> {
  const { page, source, glossary, translator, chunkChars } = options;
  const mdx = page.upstreamType === "repo-mdx";

  const parsed = matter(source);
  const translatedFrontmatter = await translateFrontmatter(parsed.data, translator, chunkChars);
  const tree = parseMarkdown(parsed.content, mdx);
  const sections = splitSections(tree as RootNode);

  for (const section of sections) {
    const mutables: MutableSegment[] = [];

    for (const node of section.nodes) {
      collectMutableSegments(node as GenericNode, mutables, section.title);
    }

    await translateMutableSegments(mutables, translator, chunkChars, section.title);
    await translateSectionCodeComments(section.nodes as GenericNode[], translator, section.title);
  }

  const body = stringifyMarkdown(tree as RootNode, mdx).trim();
  const mergedFrontmatter = {
    ...translatedFrontmatter,
    translation_locale: "ko-KR",
    translation_source_html: page.sourceHtmlUrl,
    translation_source_md: page.sourceMdUrl,
    translation_source_kind: page.upstreamType,
    translation_snapshot: "2026-03-13",
    ...(page.repoRef ? { translation_upstream_ref: page.repoRef } : {})
  };

  return ensureFrontmatterSpacing(
    matter.stringify(body.length > 0 ? `${body}\n` : "", mergedFrontmatter)
  );
}

export function parseMarkdown(source: string, mdx: boolean): RootNode {
  let processor: any = unified().use(remarkParse).use(remarkGfm);

  if (mdx) {
    processor = processor.use(remarkMdx);
  }

  return processor.parse(source) as unknown as RootNode;
}

export function stringifyMarkdown(tree: RootNode, mdx: boolean): string {
  let processor: any = unified()
    .use(remarkStringify, {
      bullet: "-",
      fences: true,
      listItemIndent: "one"
    })
    .use(remarkGfm);

  if (mdx) {
    processor = processor.use(remarkMdx);
  }

  return processor.stringify(tree as never) as string;
}

function ensureFrontmatterSpacing(value: string): string {
  const match = value.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    return value;
  }

  const inner = match[1].endsWith("\n") ? match[1] : `${match[1]}\n`;
  return `---\n${inner}\n---\n${value.slice(match[0].length)}`;
}

export function splitSections(tree: RootNode): Array<{ title: string; nodes: unknown[] }> {
  const sections: Array<{ title: string; nodes: unknown[] }> = [];
  let current: { title: string; nodes: unknown[] } = {
    title: "Preamble",
    nodes: []
  };

  for (const child of tree.children) {
    const node = child as GenericNode;
    if (node.type === "heading" && typeof node.depth === "number" && node.depth <= 2) {
      if (current.nodes.length > 0) {
        sections.push(current);
      }

      current = {
        title: toString(node as never) || "Untitled section",
        nodes: [child]
      };
      continue;
    }

    current.nodes.push(child);
  }

  if (current.nodes.length > 0) {
    sections.push(current);
  }

  return sections;
}

export function countStructuralNodes(source: string, mdx: boolean): {
  headings: number;
  tables: number;
  codeBlocks: number;
} {
  const tree = parseMarkdown(matter(source).content, mdx);
  let headings = 0;
  let tables = 0;
  let codeBlocks = 0;

  visitNodes(tree as GenericNode, undefined, (node) => {
    if (node.type === "heading") headings += 1;
    if (node.type === "table") tables += 1;
    if (node.type === "code") codeBlocks += 1;
  });

  return { headings, tables, codeBlocks };
}

export function extractHumanReadableText(source: string, mdx: boolean): string {
  const tree = parseMarkdown(source, mdx);
  const values: string[] = [];

  visitNodes(tree as GenericNode, undefined, (node, parent) => {
    if (node.type === "text" && node.value && !shouldSkipTextNode(parent)) {
      values.push(node.value);
    }

    if (node.type === "image" && node.alt) {
      values.push(node.alt);
    }
  });

  const parsed = matter(source);
  collectFrontmatterText(parsed.data, values);

  return values.join(" ");
}

async function translateFrontmatter(
  frontmatterData: Record<string, unknown>,
  translator: SegmentTranslator,
  chunkChars: number
): Promise<Record<string, unknown>> {
  const cloned = structuredClone(frontmatterData) as Record<string, unknown>;
  const mutables: MutableSegment[] = [];

  collectFrontmatterMutables(cloned, mutables, []);
  await translateMutableSegments(mutables, translator, chunkChars, "frontmatter");

  return cloned;
}

function collectFrontmatterMutables(
  value: unknown,
  mutables: MutableSegment[],
  path: string[]
): void {
  if (Array.isArray(value)) {
    value.forEach((entry, index) => collectFrontmatterMutables(entry, mutables, [...path, String(index)]));
    return;
  }

  if (typeof value === "object" && value !== null) {
    for (const [key, entry] of Object.entries(value)) {
      if (typeof entry === "string" && FRONTMATTER_TRANSLATABLE_KEYS.has(key) && shouldTranslateText(entry)) {
        const parent = value as Record<string, unknown>;
        mutables.push({
          id: `frontmatter-${path.concat(key).join(".")}`,
          text: entry,
          kind: "frontmatter",
          context: path.concat(key).join("."),
          apply(next) {
            parent[key] = next;
          }
        });
      } else {
        collectFrontmatterMutables(entry, mutables, [...path, key]);
      }
    }
  }
}

function collectFrontmatterText(value: unknown, sink: string[]): void {
  if (Array.isArray(value)) {
    value.forEach((entry) => collectFrontmatterText(entry, sink));
    return;
  }

  if (typeof value === "object" && value !== null) {
    for (const [key, entry] of Object.entries(value)) {
      if (typeof entry === "string" && FRONTMATTER_TRANSLATABLE_KEYS.has(key)) {
        sink.push(entry);
      } else {
        collectFrontmatterText(entry, sink);
      }
    }
  }
}

function collectMutableSegments(node: GenericNode, mutables: MutableSegment[], context: string): void {
  if (node.type === "text" && node.value && shouldTranslateText(node.value)) {
    mutables.push({
      id: `text-${mutables.length}`,
      text: node.value,
      kind: "text",
      context,
      apply(next) {
        node.value = next;
      }
    });
    return;
  }

  if (node.type === "image" && node.alt && shouldTranslateText(node.alt)) {
    mutables.push({
      id: `image-${mutables.length}`,
      text: node.alt,
      kind: "text",
      context,
      apply(next) {
        node.alt = next;
      }
    });
  }

  if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
    for (const attribute of node.attributes ?? []) {
      if (
        attribute.type === "mdxJsxAttribute" &&
        attribute.name &&
        typeof attribute.value === "string" &&
        JSX_TRANSLATABLE_ATTRIBUTES.has(attribute.name) &&
        shouldTranslateText(attribute.value)
      ) {
        mutables.push({
          id: `attr-${attribute.name}-${mutables.length}`,
          text: attribute.value,
          kind: "text",
          context: `${context}:${attribute.name}`,
          apply(next) {
            attribute.value = next;
          }
        });
      }
    }
  }

  for (const child of node.children ?? []) {
    if (shouldSkipChild(child)) {
      continue;
    }
    collectMutableSegments(child, mutables, context);
  }
}

async function translateMutableSegments(
  mutables: MutableSegment[],
  translator: SegmentTranslator,
  chunkChars: number,
  context: string
): Promise<void> {
  if (mutables.length === 0) {
    return;
  }

  const batches: TranslationSegment[][] = [];
  let currentBatch: TranslationSegment[] = [];
  let currentChars = 0;

  for (const mutable of mutables) {
    const segment: TranslationSegment = {
      id: mutable.id,
      text: mutable.text,
      kind: mutable.kind,
      context: mutable.context ?? context
    };

    if (currentBatch.length > 0 && currentChars + segment.text.length > chunkChars) {
      batches.push(currentBatch);
      currentBatch = [];
      currentChars = 0;
    }

    currentBatch.push(segment);
    currentChars += segment.text.length;
  }

  if (currentBatch.length > 0) {
    batches.push(currentBatch);
  }

  for (const batch of batches) {
    const translated = await translator.translateSegments(batch, { context });
    for (const mutable of mutables) {
      const next = translated.get(mutable.id);
      if (next) {
        mutable.apply(next);
      }
    }
  }
}

async function translateSectionCodeComments(
  nodes: GenericNode[],
  translator: SegmentTranslator,
  context: string
): Promise<void> {
  const codeNodes: GenericNode[] = [];

  for (const node of nodes) {
    visitNodes(node, undefined, (current) => {
      if (current.type === "code" && typeof current.value === "string") {
        codeNodes.push(current);
      }
    });
  }

  await runWithConcurrency(codeNodes, 1, async (node) => {
    const language = node.lang?.toLowerCase();
    if (!language || !COMMENT_TRANSLATABLE_LANGUAGES.has(language)) {
      return;
    }

    node.value = await translateCodeComments(node.value ?? "", language, translator, context);
  });
}

function visitNodes(
  node: GenericNode,
  parent: GenericNode | undefined,
  callback: (node: GenericNode, parent?: GenericNode) => void
): void {
  callback(node, parent);

  for (const child of node.children ?? []) {
    visitNodes(child, node, callback);
  }
}

function shouldSkipTextNode(parent?: GenericNode): boolean {
  return !parent || shouldSkipChild(parent);
}

function shouldSkipChild(node: GenericNode): boolean {
  return [
    "inlineCode",
    "code",
    "mdxTextExpression",
    "mdxFlowExpression",
    "mdxjsEsm",
    "yaml",
    "html"
  ].includes(node.type);
}

function shouldTranslateText(value: string): boolean {
  return Boolean(value.trim()) && /[A-Za-z]/.test(value);
}

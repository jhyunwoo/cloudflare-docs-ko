import type { TranslationSegment } from "../types.js";
import type { SegmentTranslator } from "./provider.js";

interface Replacement {
  id: string;
  start: number;
  end: number;
  original: string;
}

export async function translateCodeComments(
  code: string,
  language: string | undefined,
  translator: SegmentTranslator,
  context: string
): Promise<string> {
  const replacements = extractCommentReplacements(code, language);
  if (replacements.length === 0) {
    return code;
  }

  const segments: TranslationSegment[] = replacements.map((replacement) => ({
    id: replacement.id,
    text: replacement.original.trim(),
    kind: "code-comment",
    context
  }));
  const translated = await translator.translateSegments(segments, { context });

  let result = code;
  for (const replacement of [...replacements].sort((a, b) => b.start - a.start)) {
    const nextText = translated.get(replacement.id);
    if (!nextText) {
      continue;
    }

    result = `${result.slice(0, replacement.start)}${nextText}${result.slice(replacement.end)}`;
  }

  return result;
}

export function extractCommentReplacements(code: string, language: string | undefined): Replacement[] {
  const lang = (language ?? "").toLowerCase();

  if (["js", "jsx", "ts", "tsx", "javascript", "typescript", "jsonc"].includes(lang)) {
    return [
      ...extractSlashLineComments(code),
      ...extractHashLineComments(code, false),
      ...extractDelimitedComments(code, /\/\*([\s\S]*?)\*\//g, "block")
    ];
  }

  if (["python", "py", "bash", "sh", "shell", "yaml", "yml"].includes(lang)) {
    return extractHashLineComments(code, true);
  }

  if (["html", "mdx"].includes(lang)) {
    return extractDelimitedComments(code, /<!--([\s\S]*?)-->/g, "html");
  }

  return [];
}

function extractSlashLineComments(code: string): Replacement[] {
  const lines = code.split("\n");
  const replacements: Replacement[] = [];
  let offset = 0;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const commentIndex = findSlashCommentIndex(line);
    if (commentIndex !== -1) {
      const start = offset + commentIndex + 2;
      const original = line.slice(commentIndex + 2).replace(/^\s+/, "");
      if (original.trim()) {
        replacements.push({
          id: `slash-${index}`,
          start,
          end: offset + line.length,
          original
        });
      }
    }
    offset += line.length + 1;
  }

  return replacements;
}

function extractHashLineComments(code: string, allowInline: boolean): Replacement[] {
  const lines = code.split("\n");
  const replacements: Replacement[] = [];
  let offset = 0;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const hashIndex = line.indexOf("#");
    if (hashIndex === -1) {
      offset += line.length + 1;
      continue;
    }

    if (hashIndex === 0 && line.startsWith("#!")) {
      offset += line.length + 1;
      continue;
    }

    if (!allowInline && hashIndex > 0) {
      offset += line.length + 1;
      continue;
    }

    if (allowInline && hashIndex > 0 && !/\s/.test(line[hashIndex - 1] ?? "")) {
      offset += line.length + 1;
      continue;
    }

    const original = line.slice(hashIndex + 1).replace(/^\s+/, "");
    if (!original.trim()) {
      offset += line.length + 1;
      continue;
    }

    replacements.push({
      id: `hash-${index}`,
      start: offset + hashIndex + 1,
      end: offset + line.length,
      original
    });

    offset += line.length + 1;
  }

  return replacements;
}

function extractDelimitedComments(
  code: string,
  pattern: RegExp,
  prefix: string
): Replacement[] {
  const replacements: Replacement[] = [];
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = pattern.exec(code)) !== null) {
    const fullMatch = match[0];
    const innerText = match[1];
    if (!innerText.trim()) {
      continue;
    }

    const fullStart = match.index;
    const innerStart = fullMatch.indexOf(innerText);
    replacements.push({
      id: `${prefix}-${index}`,
      start: fullStart + innerStart,
      end: fullStart + innerStart + innerText.length,
      original: innerText
    });
    index += 1;
  }

  return replacements;
}

function findSlashCommentIndex(line: string): number {
  const index = line.indexOf("//");
  if (index === -1) {
    return -1;
  }

  if (line.slice(Math.max(0, index - 2), index + 2).includes("://")) {
    return -1;
  }

  if (index > 0 && !/\s/.test(line[index - 1] ?? "")) {
    return -1;
  }

  return index;
}


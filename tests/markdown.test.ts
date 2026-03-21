import matter from "gray-matter";
import { describe, expect, it } from "vitest";

import {
  countStructuralNodes,
  extractHumanReadableText,
  parseMarkdown,
  splitSections,
  stringifyMarkdown,
  translateDocument
} from "../src/lib/markdown/processor.js";
import type { PageManifest, TranslationSegment } from "../src/lib/types.js";
import type { SegmentTranslator } from "../src/lib/translation/provider.js";

class StubTranslator implements SegmentTranslator {
  async translateSegments(segments: TranslationSegment[]): Promise<Map<string, string>> {
    return new Map(segments.map((segment) => [segment.id, `ko:${segment.text}`]));
  }
}

const glossary = { doNotTranslate: [], preferredKo: {} };

function buildPage(overrides: Partial<PageManifest> = {}): PageManifest {
  return {
    url: "https://developers.cloudflare.com/workers/example/",
    product: "workers",
    title: "Example",
    sourceMdUrl: "https://developers.cloudflare.com/workers/example/index.md",
    sourceHtmlUrl: "https://developers.cloudflare.com/workers/example/",
    upstreamType: "repo-mdx",
    contentHash: "hash",
    outputPath: "/tmp/output.mdx",
    status: "pending",
    ...overrides
  };
}

describe("markdown translation pipeline", () => {
  it("translates only whitelisted frontmatter fields and body text", async () => {
    const source = `---
title: Frontmatter title
sidebar:
  label: Overview label
  badge: Keep me
nested:
  items:
    - label: First item
    - description: Describe me
---

# Heading

Paragraph text.
`;

    const translator = new StubTranslator();
    const output = await translateDocument({
      page: buildPage(),
      source,
      glossary,
      translator,
      chunkChars: 5000
    });

    const parsed = matter(output);
    expect(parsed.data.title).toBe("ko:Frontmatter title");
    expect(parsed.data.sidebar.label).toBe("ko:Overview label");
    expect(parsed.data.sidebar.badge).toBe("Keep me");
    expect(parsed.data.nested.items[0].label).toBe("ko:First item");
    expect(parsed.content).toContain("ko:Paragraph text.");
    expect(parsed.data.translation_locale).toBe("ko-KR");
  });

  it("splits sections at headings and keeps content grouped", () => {
    const mdx = `# Intro
Intro text
## Setup
Step instructions
### Nested detail
Still the same section
## Deploy
Ready to go`;

    const tree = parseMarkdown(mdx, true);
    const sections = splitSections(tree);

    expect(sections.map((section) => section.title)).toEqual(["Intro", "Setup", "Deploy"]);
    const subtree = { type: "root", children: sections[1].nodes } as never;
    expect(stringifyMarkdown(subtree, true)).toContain("Nested detail");
  });

  it("counts structural nodes and extracts only human-readable text", () => {
    const markdown = `# Title

| Col | Val |
| --- | --- |
| A | B |

\`\`\`js
// comment
const value = 1;
\`\`\`

Some text with \`inline code\`.
`;

    const counts = countStructuralNodes(markdown, false);
    expect(counts.headings).toBe(1);
    expect(counts.tables).toBe(1);
    expect(counts.codeBlocks).toBe(1);

    const text = extractHumanReadableText(markdown, false);
    expect(text).toContain("Some text with");
    expect(text).not.toMatch(/inline code/);
  });
});

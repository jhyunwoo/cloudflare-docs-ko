import { describe, expect, it } from "vitest";

import { translateCodeComments } from "../src/lib/translation/comments.js";
import type { SegmentTranslator } from "../src/lib/translation/provider.js";
import type { TranslationSegment } from "../src/lib/types.js";

class IdentityTranslator implements SegmentTranslator {
  constructor(private readonly prefix: string) {}

  async translateSegments(segments: TranslationSegment[]): Promise<Map<string, string>> {
    return new Map(segments.map((segment) => [segment.id, `${this.prefix}${segment.text}`]));
  }
}

describe("code comment translation", () => {
  it("only rewrites comment tokens for JavaScript-style languages", async () => {
    const code = `// heading comment
const value = 1; // inline comment

/*
 Block comment
*/

console.log("value", value);
`;

    const result = await translateCodeComments(
      code,
      "js",
      new IdentityTranslator("ko:"),
      "JS snippet"
    );

    expect(result).toContain("ko:heading comment");
    expect(result).toContain("ko:inline comment");
    expect(result).toContain("/*ko:Block comment*/");
    expect(result).toContain('console.log("value", value);');
  });

  it("translates hash-prefixed comments when allowed", async () => {
    const shell = `#!/bin/bash
# setup
echo "start" # inline literal
`;

    const result = await translateCodeComments(
      shell,
      "bash",
      new IdentityTranslator("ko:"),
      "shell snippet"
    );

    expect(result).toContain("ko:setup");
    expect(result).toContain("#ko:inline literal");
  });
});

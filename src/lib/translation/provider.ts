import type { TranslationConfig, TranslationResponse, TranslationSegment } from "../types.js";
import { sleep } from "../utils.js";
import type { LoadedGlossary } from "./glossary.js";

export interface SegmentTranslator {
  translateSegments(
    segments: TranslationSegment[],
    options?: {
      context?: string;
    }
  ): Promise<Map<string, string>>;
}

export class OpenAICompatibleTranslator implements SegmentTranslator {
  private readonly endpoint: string;
  private readonly apiKey: string;

  constructor(
    private readonly config: TranslationConfig,
    private readonly glossary: LoadedGlossary
  ) {
    const apiKey = process.env[config.apiKeyEnvVar];
    if (!apiKey) {
      throw new Error(`Environment variable ${config.apiKeyEnvVar} is not set`);
    }

    this.apiKey = apiKey;
    const trimmedBase = config.baseUrl.replace(/\/$/, "");
    this.endpoint = trimmedBase.endsWith("/chat/completions")
      ? trimmedBase
      : `${trimmedBase}/chat/completions`;
  }

  async translateSegments(
    segments: TranslationSegment[],
    options: {
      context?: string;
    } = {}
  ): Promise<Map<string, string>> {
    if (segments.length === 0) {
      return new Map();
    }

    const payload = {
      translations: segments.map((segment) => ({
        id: segment.id,
        kind: segment.kind,
        context: segment.context ?? options.context ?? "",
        text: segment.text
      }))
    };

    const systemPrompt = [
      "You are translating Cloudflare technical documentation from English to Korean (ko-KR).",
      "Translate fully. Never summarize, omit, compress, or explain.",
      "Preserve Markdown/MDX syntax, placeholders, identifiers, URLs, file names, and code tokens.",
      "For code-comment segments, translate only the human-readable comment text.",
      "Keep product names, API names, commands, file names, feature flags, and placeholders in English unless a preferred Korean term is explicitly provided.",
      `Do-not-translate terms: ${this.glossary.doNotTranslate.join(", ") || "(none)"}`,
      `Preferred Korean terms: ${JSON.stringify(this.glossary.preferredKo)}`,
      'Return ONLY valid JSON with shape {"translations":[{"id":"...","text":"..."}]}.'
    ].join("\n");

    for (let attempt = 0; attempt <= this.config.retries; attempt += 1) {
      try {
        const response = await fetch(this.endpoint, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${this.apiKey}`
          },
          body: JSON.stringify({
            model: this.config.model,
            temperature: 0,
            messages: [
              {
                role: "system",
                content: systemPrompt
              },
              {
                role: "user",
                content: JSON.stringify(payload)
              }
            ]
          })
        });

        if (!response.ok) {
          throw new Error(`Translation request failed: ${response.status} ${response.statusText}`);
        }

        const data = (await response.json()) as {
          choices?: Array<{
            message?: {
              content?: string | Array<{ type?: string; text?: string }>;
            };
          }>;
        };
        const content = data.choices?.[0]?.message?.content;
        const parsed = parseProviderContent(content);
        validateResponse(parsed, segments);

        return new Map(parsed.translations.map((entry) => [entry.id, entry.text]));
      } catch (error) {
        if (attempt >= this.config.retries) {
          throw error;
        }

        await sleep(1000 * (attempt + 1));
      }
    }

    throw new Error("Unreachable translation retry state");
  }
}

function parseProviderContent(
  content: string | Array<{ type?: string; text?: string }> | undefined
): TranslationResponse {
  const raw = Array.isArray(content)
    ? content.map((item) => item.text ?? "").join("")
    : (content ?? "");
  const trimmed = raw.trim();

  try {
    return JSON.parse(trimmed) as TranslationResponse;
  } catch {
    const firstBrace = trimmed.indexOf("{");
    const lastBrace = trimmed.lastIndexOf("}");
    if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
      throw new Error(`Model response was not valid JSON: ${trimmed.slice(0, 200)}`);
    }

    return JSON.parse(trimmed.slice(firstBrace, lastBrace + 1)) as TranslationResponse;
  }
}

function validateResponse(response: TranslationResponse, segments: TranslationSegment[]): void {
  if (!Array.isArray(response.translations)) {
    throw new Error("Model response is missing translations[]");
  }

  const ids = new Set(response.translations.map((entry) => entry.id));
  for (const segment of segments) {
    if (!ids.has(segment.id)) {
      throw new Error(`Model response is missing translation for ${segment.id}`);
    }
  }
}


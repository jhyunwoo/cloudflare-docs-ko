import fs from "node:fs/promises";

import type { TranslationConfig } from "./types.js";

export async function loadTranslationConfig(options: {
  requireModel?: boolean;
  requireApiKey?: boolean;
} = {}): Promise<TranslationConfig> {
  const raw = await fs.readFile("translation.config.json", "utf8");
  const config = JSON.parse(raw) as TranslationConfig;

  if (config.provider !== "openai-compatible") {
    throw new Error(`Unsupported provider: ${config.provider}`);
  }

  if (!config.baseUrl) {
    throw new Error("translation.config.json is missing baseUrl");
  }

  if (options.requireModel !== false && !config.model) {
    throw new Error("translation.config.json is missing model");
  }

  if (!config.apiKeyEnvVar) {
    throw new Error("translation.config.json is missing apiKeyEnvVar");
  }

  if (options.requireApiKey !== false && !process.env[config.apiKeyEnvVar]) {
    throw new Error(`Environment variable ${config.apiKeyEnvVar} is not set`);
  }

  if (!Number.isInteger(config.concurrency) || config.concurrency < 1) {
    throw new Error("translation.config.json concurrency must be a positive integer");
  }

  if (!Number.isInteger(config.retries) || config.retries < 0) {
    throw new Error("translation.config.json retries must be zero or more");
  }

  if (!Number.isInteger(config.chunkChars) || config.chunkChars < 1000) {
    throw new Error("translation.config.json chunkChars must be at least 1000");
  }

  return config;
}

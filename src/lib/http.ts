import { execFile } from "node:child_process";
import { promisify } from "node:util";

import { DEFAULT_USER_AGENT } from "./constants.js";
import { sleep } from "./utils.js";

export interface FetchTextOptions {
  accept?: string;
  headers?: Record<string, string>;
}

const execFileAsync = promisify(execFile);

export async function fetchText(
  url: string,
  options: FetchTextOptions = {}
): Promise<string> {
  const accept = options.accept ?? "text/markdown,text/plain;q=0.9,*/*;q=0.8";
  const headers = {
    "user-agent": DEFAULT_USER_AGENT,
    accept,
    ...options.headers
  };

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers,
        signal: AbortSignal.timeout(45000)
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
      }

      return await response.text();
    } catch (error) {
      if (attempt === 2) {
        break;
      }

      await sleep(1000 * (attempt + 1));
      if (error instanceof Error && /404/.test(error.message)) {
        throw error;
      }
    }
  }

  const curlArgs = [
    "-L",
    "--max-time",
    "45",
    "-A",
    DEFAULT_USER_AGENT,
    "-H",
    `accept: ${accept}`,
    "-sS",
    url
  ];

  try {
    const { stdout } = await execFileAsync("curl", curlArgs, {
      encoding: "utf8",
      maxBuffer: 32 * 1024 * 1024
    });
    return stdout;
  } catch (error) {
    throw new Error(`Failed to fetch ${url} via fetch and curl fallback: ${(error as Error).message}`);
  }
}

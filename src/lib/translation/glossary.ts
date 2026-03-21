import path from "node:path";

import { GLOSSARY_DIR } from "../constants.js";
import { readJsonFile } from "../utils.js";

export interface LoadedGlossary {
  doNotTranslate: string[];
  preferredKo: Record<string, string>;
}

export async function loadGlossary(): Promise<LoadedGlossary> {
  const [doNotTranslate, preferredKo] = await Promise.all([
    readJsonFile<string[]>(path.join(GLOSSARY_DIR, "do-not-translate.json")),
    readJsonFile<Record<string, string>>(path.join(GLOSSARY_DIR, "preferred-ko.json"))
  ]);

  return {
    doNotTranslate: doNotTranslate ?? [],
    preferredKo: preferredKo ?? {}
  };
}


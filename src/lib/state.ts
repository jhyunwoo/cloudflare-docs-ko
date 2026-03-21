import path from "node:path";
import { DatabaseSync } from "node:sqlite";

import { STATE_DB_PATH } from "./constants.js";
import type { PageStatus, StateRow } from "./types.js";
import { ensureDir, fileExists, nowIso } from "./utils.js";

export class TranslationStateStore {
  private db: DatabaseSync;

  private constructor(db: DatabaseSync) {
    this.db = db;
  }

  static async open(): Promise<TranslationStateStore> {
    await ensureDir(path.dirname(STATE_DB_PATH));
    const existed = await fileExists(STATE_DB_PATH);
    const db = new DatabaseSync(STATE_DB_PATH);
    const store = new TranslationStateStore(db);
    if (!existed) {
      store.initialize();
    } else {
      store.initialize();
    }

    return store;
  }

  private initialize(): void {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS page_state (
        url TEXT PRIMARY KEY,
        content_hash TEXT NOT NULL,
        status TEXT NOT NULL,
        output_path TEXT NOT NULL,
        last_translated_at TEXT,
        last_error TEXT,
        updated_at TEXT NOT NULL
      );
    `);
  }

  listRows(): StateRow[] {
    const statement = this.db.prepare(`
      SELECT
        url,
        content_hash as contentHash,
        status,
        output_path as outputPath,
        last_translated_at as lastTranslatedAt,
        last_error as lastError,
        updated_at as updatedAt
      FROM page_state
    `);

    return statement.all() as unknown as StateRow[];
  }

  upsert(row: {
    url: string;
    contentHash: string;
    status: PageStatus;
    outputPath: string;
    lastTranslatedAt?: string;
    lastError?: string;
  }): void {
    const statement = this.db.prepare(`
      INSERT INTO page_state (
        url,
        content_hash,
        status,
        output_path,
        last_translated_at,
        last_error,
        updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(url) DO UPDATE SET
        content_hash = excluded.content_hash,
        status = excluded.status,
        output_path = excluded.output_path,
        last_translated_at = excluded.last_translated_at,
        last_error = excluded.last_error,
        updated_at = excluded.updated_at
    `);

    statement.run(
      row.url,
      row.contentHash,
      row.status,
      row.outputPath,
      row.lastTranslatedAt ?? null,
      row.lastError ?? null,
      nowIso()
    );
  }

  close(): void {
    this.db.close();
  }
}

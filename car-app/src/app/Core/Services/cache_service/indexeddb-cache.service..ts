import { Injectable } from '@angular/core';
import { get, set, del, clear } from 'idb-keyval';

@Injectable({ providedIn: 'root' })
export class IndexedDbCacheService {
  async get(url: string): Promise<any | null> {
    const cached = await get(url);
    if (!cached) return null;

    // optional: expire after 1 hour
    const now = Date.now();
    if (now - cached.timestamp > 60 * 60 * 1000) {
      await del(url);
      return null;
    }

    return cached.response;
  }

  async set(url: string, response: any): Promise<void> {
    await set(url, { response, timestamp: Date.now() });
  }

  async clear(): Promise<void> {
    await clear();
  }
}

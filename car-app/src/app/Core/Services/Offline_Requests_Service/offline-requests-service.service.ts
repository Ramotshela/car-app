import { Injectable } from '@angular/core';
import { openDB } from 'idb';

@Injectable({ providedIn: 'root' })
export class OfflineRequestsService {
  private readonly dbPromise = openDB('CarDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('requests')) {
        db.createObjectStore('requests', {
          keyPath: 'id',
          autoIncrement: true,
        });
      }
      if (!db.objectStoreNames.contains('cartypes')) {
        db.createObjectStore('cartypes')
      }
    },
  });
  async saveData(key: string, data:any) {
    const db = await this.dbPromise;
    return db.put('cartypes',data,key)
  }
  async getData(key: string) {
    const db = await this.dbPromise;
    return db.get('cartypes',key)
  }
  async saveRequest(request: any) {
    const db = await this.dbPromise;
    await db.add('requests', request);
  }

  async getAllRequests() {
    const db = await this.dbPromise;
    return db.getAll('requests');
  }

  async deleteRequest(id: number) {
    const db = await this.dbPromise;
    await db.delete('requests', id);
  }
}

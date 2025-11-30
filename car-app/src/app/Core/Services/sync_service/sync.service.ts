import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfflineRequestsService } from '../Offline_Requests_Service/offline-requests-service.service';

@Injectable({ providedIn: 'root' })
export class SyncService {
  private readonly offlineService = inject(OfflineRequestsService);
  private readonly http = inject(HttpClient);

  constructor() {
    window.addEventListener('online', () => this.syncPendingRequests());
  }

  async syncPendingRequests() {
    console.log("sync")
    const requests = await this.offlineService.getAllRequests();
    for (const req of requests) {
      try {
        await this.http.post(req.url, req.body).toPromise();
        await this.offlineService.deleteRequest(req.id);
        console.log('Synced request manually', req);
      } catch  {
        console.error('Manual sync failed', req);
      }
    }
  }
}

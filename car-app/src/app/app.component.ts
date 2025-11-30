import { Component, inject } from '@angular/core';
import { SyncService } from './Core/Services/sync_service/sync.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'car-app';
  isOnline = navigator.onLine;
private readonly syncService =inject(SyncService)
  ngOnInit() {
    window.addEventListener('online', () => (this.isOnline = true));
    window.addEventListener('offline', () => (this.isOnline = false));
    this.syncService.syncPendingRequests()
  }

}

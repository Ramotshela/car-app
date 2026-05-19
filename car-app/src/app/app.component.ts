import { Component, inject } from '@angular/core';
import { SyncService } from './Core/Services/sync_service/sync.service';

// Network Information API interfaces
interface NetworkInformation extends EventTarget {
  downlink: number;
  effectiveType: '2g' | '3g' | '4g' | 'slow-2g';
  rtt: number;
  saveData: boolean;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'car-app';
  isOnline = navigator.onLine;
  networkBandwidth = (navigator as NavigatorWithConnection).connection?.effectiveType || null;
  private readonly syncService = inject(SyncService);
  ngOnInit() {
    window.addEventListener('online', () => (this.isOnline = true));
    window.addEventListener('offline', () => (this.isOnline = false));
    // Listen for network connection changes
    const connection = (navigator as NavigatorWithConnection).connection;
    if (connection) {
      connection.addEventListener('change', () => {
        this.networkBandwidth = connection.effectiveType;
      });
    }
      console.log('Network bandwidth:', this.networkBandwidth, 'Mbps');

    this.syncService.syncPendingRequests();
  }
}

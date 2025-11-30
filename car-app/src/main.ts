import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('ngsw-worker.js')
        .then(() => {
          // Register your custom background sync worker
          navigator.serviceWorker
            .register('./custom-service-worker.js')
            .then(() => console.log('Custom service worker registered'))
            .catch((err) => console.error('Custom SW failed', err));
        })
        .catch((err) => console.error('Angular SW failed', err));
    }
  })
  .catch((err) => console.error(err));

import { inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IndexedDbCacheService } from '../../Services/cache_service/indexeddb-cache.service.';

@Injectable()
export class IndexedDbCacheInterceptor implements HttpInterceptor {
  private readonly cacheService = inject(IndexedDbCacheService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') return next.handle(req);

    return from(this.cacheService.get(req.url)).pipe(
      switchMap((cachedResponse) => {
        if (cachedResponse) {
          console.log(`Serving from IndexedDB cache: ${req.url}`);
          return of(new HttpResponse({ body: cachedResponse, status: 200 }));
        }

        return next.handle(req).pipe(
          tap((event) => {
            if (event instanceof HttpResponse) {
              console.log(`Caching to IndexedDB: ${req.url}`);
              this.cacheService.set(req.url, event.body);
            }
          })
        );
      })
    );
  }
}

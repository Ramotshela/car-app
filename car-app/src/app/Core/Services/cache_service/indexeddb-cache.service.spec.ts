import { TestBed } from '@angular/core/testing';

import { IndexedDbCacheService } from '../../Services/cache_service/indexeddb-cache.service.';

describe('IndexedDbCacheService', () => {
  let service: IndexedDbCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexedDbCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

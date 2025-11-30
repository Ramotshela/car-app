import { TestBed } from '@angular/core/testing';

import { OfflineRequestsService } from './offline-requests-service.service';

describe('OfflineRequestsServiceService', () => {
  let service: OfflineRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

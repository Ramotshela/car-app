import { TestBed } from '@angular/core/testing';

import { CarTypeServiceService } from './car-type-service.service';

describe('CarTypeServiceService', () => {
  let service: CarTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

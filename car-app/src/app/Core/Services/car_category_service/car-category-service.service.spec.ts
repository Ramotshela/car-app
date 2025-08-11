import { TestBed } from '@angular/core/testing';

import { CarCategoryServiceService } from './car-category-service.service';

describe('CarCategoryServiceService', () => {
  let service: CarCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

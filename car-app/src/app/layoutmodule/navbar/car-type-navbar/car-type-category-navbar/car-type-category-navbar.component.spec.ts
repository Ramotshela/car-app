import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTypeCategoryNavbarComponent } from './car-type-category-navbar.component';

describe('CarTypeCategoryNavbarComponent', () => {
  let component: CarTypeCategoryNavbarComponent;
  let fixture: ComponentFixture<CarTypeCategoryNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarTypeCategoryNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTypeCategoryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

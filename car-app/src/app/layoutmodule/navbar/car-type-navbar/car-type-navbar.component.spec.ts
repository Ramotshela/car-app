import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTypeNavbarComponent } from './car-type-navbar.component';

describe('CarTypeNavbarComponent', () => {
  let component: CarTypeNavbarComponent;
  let fixture: ComponentFixture<CarTypeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarTypeNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTypeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

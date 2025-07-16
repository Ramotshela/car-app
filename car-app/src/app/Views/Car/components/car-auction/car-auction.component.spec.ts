import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAuctionComponent } from './car-auction.component';

describe('CarAuctionComponent', () => {
  let component: CarAuctionComponent;
  let fixture: ComponentFixture<CarAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarAuctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

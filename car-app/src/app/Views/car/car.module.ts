import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListingComponent } from './car-listing/car-listing.component';
import { CarAuctionComponent } from './car-auction/car-auction.component';
import { SharedModule } from '../../Shared';



@NgModule({
  declarations: [CarListingComponent, CarAuctionComponent],
  imports: [CommonModule, SharedModule],
  exports:[CarListingComponent,CarAuctionComponent]
})

export class CarModule {}

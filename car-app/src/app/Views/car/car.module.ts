import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListingComponent } from './car-listing/car-listing.component';
import { CarAuctionComponent } from './car-auction/car-auction.component';
import { SharedModule } from '../../Shared';
import { CarRentalComponent } from './carrental/carrental.component';



@NgModule({
  declarations: [CarListingComponent, CarAuctionComponent, CarRentalComponent],
  imports: [CommonModule, SharedModule,ReactiveFormsModule],
  exports:[CarListingComponent,CarAuctionComponent,CarRentalComponent]
})

export class CarModule {}

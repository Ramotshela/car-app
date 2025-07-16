import { Component } from '@angular/core';

@Component({
  selector: 'app-car-auction',
  templateUrl: './car-auction.component.html',
  standalone: false,
  styleUrl: './car-auction.component.scss',
})
export class CarAuctionComponent {
  auctionCars = [
    { make: 'Audi', model: 'A6', currentBid: 'R250,000' },
    { make: 'Mercedes', model: 'C200', currentBid: 'R280,000' },
  ];
}

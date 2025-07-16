import { Component } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  standalone: false,
  styleUrl: './car-list.component.scss',
})
export class CarListComponent {
  cars = [
    { make: 'Toyota', model: 'Corolla', price: 'R180,000', status: 'For Sale' },
    { make: 'Ford', model: 'Ranger', price: 'R450/day', status: 'For Rent' },
    { make: 'BMW', model: 'X5', price: 'Live Bid', status: 'Auction' },
  ];
}

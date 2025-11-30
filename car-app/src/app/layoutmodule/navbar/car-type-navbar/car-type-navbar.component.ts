import { Component } from '@angular/core';

@Component({
  selector: 'app-car-type-navbar',
  standalone: false,
  templateUrl: './car-type-navbar.component.html',
  styleUrl: './car-type-navbar.component.scss',
})
export class CarTypeNavbarComponent {
  selected: any[] = [];
  carType: any[] = [];
  selectCarType(carType: any[]) {
    this.selected = carType;
  }



  handleKeyDown(event: KeyboardEvent, category: any) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.selectCarType(category);
      event.preventDefault(); // optional, prevents page scroll for spacebar
    }
  }
}

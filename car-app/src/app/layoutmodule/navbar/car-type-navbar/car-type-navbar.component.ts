import { Component } from '@angular/core';
import { CarCategoryServiceService } from '../../../Core/Services/car_category_service';
import { CarTypeServiceService } from '../../../Core/Services/car_type_service';

@Component({
  selector: 'app-car-type-navbar',
  standalone: false,
  templateUrl: './car-type-navbar.component.html',
  styleUrl: './car-type-navbar.component.scss',
})
export class CarTypeNavbarComponent {
  selected: any[]  = [];
  carType: any[] = [];
  constructor(
    private readonly carTypeService: CarTypeServiceService
  ) {}
  selectCarType(carType: any[]) {
    this.selected = carType;
  }
  ngOnInit() {
    this.getAllCarType();

  }
  getAllCarType() {
    this.carTypeService.getAllCarTypes().subscribe({
      next: (carType) => {
        this.carType = carType;

      },
      error: (error) => {
        console.error('Error fetching car types:', error);
      },
    });
  }

  handleKeyDown(event: KeyboardEvent, category: any) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.selectCarType(category);
      event.preventDefault(); // optional, prevents page scroll for spacebar
    }
  }
}

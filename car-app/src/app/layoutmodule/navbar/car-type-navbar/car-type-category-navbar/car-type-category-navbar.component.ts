import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CarCategoryServiceService } from '../../../../Core/Services/car_category_service';

@Component({
  selector: 'app-car-type-category-navbar',
  standalone: false,
  templateUrl: './car-type-category-navbar.component.html',
  styleUrl: './car-type-category-navbar.component.scss',
  animations: [
    trigger('submenuAnimation', [
      transition(':enter', [
        // when element is added to DOM
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class CarTypeCategoryNavbarComponent implements OnChanges {
  @Input() selected: any;

  carCategories: any[] = [];
  constructor(private readonly carCategoryService: CarCategoryServiceService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selected'] && this.selected !== null) {
      const firstSelectedItem = this.selected; // Assuming you're interested in the first item


      if (firstSelectedItem) {
        this.getAllCarCategoriesById(firstSelectedItem);
      }
    }
  }
  getAllCarCategoriesById(catTypeId: string) {

    this.carCategoryService.getCarCategoriesById(catTypeId).subscribe({
      next: (categories) => {
        this.carCategories = categories as any[];
      },
      error: (error) => {
        console.error('Error fetching car categories:', error);
      },
    });
  }
}

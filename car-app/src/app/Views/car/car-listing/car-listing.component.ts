import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { CarTypeServiceService, FilterItem } from '../../../Core';

@Component({
  selector: 'app-car-listing',
  standalone: false,
  templateUrl: './car-listing.component.html',
  styleUrl: './car-listing.component.scss',
})
export class CarListingComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.carTypeService.getAllCarTypesCategoryFilter();
  }
  selectedFilter = '';
  private readonly carTypeService = inject(CarTypeServiceService);
  filters: FilterItem[] = [];
  ngAfterViewInit(): void {
    this.getAllCarTypes();
  }
  getAllCarTypes() {
    this.carTypeService.carTypes$.subscribe((data) => {
      this.filters = data.map((type:FilterItem) => ({
        id: type.id,
        name: type.name,
        categoryDto: type.categoryDto?.map((data) => ({
          id:data.id,
          name:data.name
        }))
      }));
    });
  }
}

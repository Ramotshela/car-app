import { Component,  inject } from '@angular/core';
import { Router } from '@angular/router';
import { CarTypeServiceService } from '../../../Core/Services/car_type_service';

@Component({
  selector: 'app-hero-dashboard',
  standalone: false,
  templateUrl: './hero-dashboard.component.html',
  styleUrl: './hero-dashboard.component.scss',
})
export class HeroDashboardComponent {
  router = inject(Router);
  private readonly carTypeService = inject(CarTypeServiceService);
  onExploreClick() {
    this.router.navigate(['main-content']);
    //this.router.navigate(['/main-content'])
  }
  name = '';
  message = '';

  async addCarType() {
    const body = { name: this.name };

    const result = await this.carTypeService.createCarType(body);

    if ((result as any)?.status === 'saved-offline') {
      this.message =
        '📡 Offline: request saved locally and will sync when online.';
    } else {
      this.message = '✅ Car type added successfully!';
    }
  }
}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-dashboard',
  standalone: false,
  templateUrl: './hero-dashboard.component.html',
  styleUrl: './hero-dashboard.component.scss',
})
export class HeroDashboardComponent {
router=inject(Router)
  onExploreClick() {
    this.router.navigate(['main-content']);
   //this.router.navigate(['/main-content'])
  }
}

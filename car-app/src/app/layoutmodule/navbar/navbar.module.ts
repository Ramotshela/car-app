import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from './top-navbar';
import { CarTypeNavbarComponent } from './car-type-navbar';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../../Shared';
import { CarTypeCategoryNavbarComponent } from './car-type-navbar/car-type-category-navbar/car-type-category-navbar.component';

@NgModule({
  declarations: [
    TopNavbarComponent,
    CarTypeNavbarComponent,
    NavbarComponent,
    CarTypeCategoryNavbarComponent,
  ],
  imports: [CommonModule, SharedModule,RouterModule],
  exports: [NavbarComponent,TopNavbarComponent,CarTypeNavbarComponent],
})
export class NavbarModule {}

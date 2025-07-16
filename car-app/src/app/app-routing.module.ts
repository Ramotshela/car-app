import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './Views/Car/components/car-list';
import { CarFormComponent } from './Views/Car/components/car-form';
import { CarAuctionComponent } from './Views/Car/components/car-auction';

const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'sell', component: CarFormComponent },
  { path: 'rent', component: CarFormComponent },
  { path: 'auction', component: CarAuctionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

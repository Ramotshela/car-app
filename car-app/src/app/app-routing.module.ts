import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Views/dashboard/dashboard.module').then(m => m.DashboardModule) },
  {
    path: 'car',
    loadChildren: () => import('./Views/car/car.module').then(m => m.CarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

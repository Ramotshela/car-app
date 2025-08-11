import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainDashboardComponent } from './main-dashboard';

const routes: Routes = [{ path: '', component: DashboardComponent },
  {path:'main-content',component:MainDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

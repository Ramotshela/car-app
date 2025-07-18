import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { SharedModule } from '../../Shared';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,DashboardRoutingModule,RouterModule
  ]
})
export class DashboardModule { }

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../Shared';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutmoduleModule } from '../../layoutmodule/layoutmodule.module';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CarModule } from '../car';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    HeroDashboardComponent,
    MainDashboardComponent,
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    RouterModule,
    LayoutmoduleModule,
    CarModule,
    HttpClientModule,
  ],
})
export class DashboardModule {}

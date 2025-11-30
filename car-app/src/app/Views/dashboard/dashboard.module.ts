import { RouterModule } from '@angular/router';
import { inject, NgModule } from '@angular/core';
import { SharedModule } from '../../Shared';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutmoduleModule } from '../../layoutmodule/layoutmodule.module';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CarModule } from '../car';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StateServiceService } from '../../Core/Services/state_service/state-service.service';

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
    FormsModule,
    HttpClientModule,
  ],
})
export class DashboardModule {
 
}

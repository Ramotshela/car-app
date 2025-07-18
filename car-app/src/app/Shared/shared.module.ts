import { NgModule } from '@angular/core';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MaterialsModule } from './materials';



@NgModule({
  declarations: [TopNavbarComponent],
  imports: [ MaterialsModule],
  exports: [TopNavbarComponent, MaterialsModule],
})
export class SharedModule {}

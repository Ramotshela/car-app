import { NgModule } from '@angular/core';
import { MaterialsModule } from './materials';
import { FilterComponent } from './components/filter/filter.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [ MaterialsModule,CommonModule],
  exports: [ MaterialsModule,FilterComponent],
})
export class SharedModule {}

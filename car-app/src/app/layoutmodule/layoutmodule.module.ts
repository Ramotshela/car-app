import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,NavbarModule,RouterModule
  ],
  exports: [CommonModule, NavbarModule,]
})
export class LayoutmoduleModule { }

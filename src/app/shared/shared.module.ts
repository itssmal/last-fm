import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {NbIconModule} from '@nebular/theme';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NbIconModule,
    RouterModule
  ]
})
export class SharedModule { }

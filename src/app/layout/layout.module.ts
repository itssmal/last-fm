import { NgModule } from '@angular/core';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {NbLayoutModule} from '@nebular/theme';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    LayoutRoutingModule,
    NbLayoutModule,
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import {PagesRoutingModule} from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import {NbAlertModule, NbCardModule, NbInputModule, NbListModule, NbSpinnerModule} from '@nebular/theme';
import {CommonModule} from '@angular/common';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent
  ],
  imports: [
    NbCardModule,
    CommonModule,
    NbSpinnerModule,
    NgbPaginationModule,
    NbInputModule,
    ReactiveFormsModule,
    NbListModule,
    NbAlertModule

  ],
  exports: [
    PagesRoutingModule
  ],
})
export class PagesModule { }

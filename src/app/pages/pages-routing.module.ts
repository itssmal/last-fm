import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: 'home'},
      {path: 'home', component: HomeComponent}
    ]
  },
  {
    path: 'search',
    component: SearchComponent
  }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }

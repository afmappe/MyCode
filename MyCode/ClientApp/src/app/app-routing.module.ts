import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsComponent } from './charts/charts.component';
import { ListComponent } from './tweet/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'charts',
    pathMatch: 'full'
  },
  { path: 'tweets', component: ListComponent },
  { path: 'charts', component: ChartsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

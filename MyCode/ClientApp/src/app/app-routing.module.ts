import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './tweet/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tweets',
    pathMatch: 'full'
  },
  { path: 'tweets', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

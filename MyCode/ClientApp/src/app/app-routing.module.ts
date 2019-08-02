import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsComponent } from './charts/charts.component';
import { DragDropBasicExampleComponent } from './drag-drop-basic-example/drag-drop-basic-example.component';
import { MultiTestComponent } from './multi-test/multi-test.component';
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';
import { ListComponent } from './tweet/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mycomp',
    pathMatch: 'full'
  },
  { path: 'tweets', component: ListComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'table', component: TableBasicExampleComponent },
  { path: 'drag', component: DragDropBasicExampleComponent },
  { path: 'mycomp', component: MultiTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

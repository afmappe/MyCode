import 'chartjs-plugin-colorschemes';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { BarchartComponent } from './charts/linechart/barchart.component';
import { DragDropBasicExampleComponent } from './drag-drop-basic-example/drag-drop-basic-example.component';
import { MultiTestComponent } from './multi-test/multi-test.component';
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';
import { TweetModule } from './tweet/tweet.module';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    ChartsComponent,
    TableBasicExampleComponent,
    DragDropBasicExampleComponent,
    MultiTestComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DragDropModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    TweetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

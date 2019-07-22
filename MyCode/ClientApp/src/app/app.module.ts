import 'chartjs-plugin-colorschemes';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { BarchartComponent } from './charts/linechart/barchart.component';
import { TweetModule } from './tweet/tweet.module';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    BarchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TweetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

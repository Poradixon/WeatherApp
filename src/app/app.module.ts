import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchParamsComponent } from './Components/search-params/search-params.component';
import { WeatherComponent } from './Components/weather/weather.component';

@NgModule({
  declarations: [AppComponent, SearchParamsComponent, WeatherComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

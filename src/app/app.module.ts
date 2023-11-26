import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WeatherLocationComponent } from './weather-location/weather-location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgeTimeComponent } from './age-time/age-time.component';
import { MarylandViolationComponent } from './maryland-violation/maryland-violation.component';
import { CarTrendsComponent } from './car-trends/car-trends.component';
import { CovidComponent } from './covid/covid.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent,
    SignUpComponent,
    WeatherLocationComponent,
    AgeTimeComponent,
    MarylandViolationComponent,
    CarTrendsComponent,
    CovidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

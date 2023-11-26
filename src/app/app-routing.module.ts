import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { WeatherLocationComponent } from './weather-location/weather-location.component';
import { AgeTimeComponent } from './age-time/age-time.component';
import { MarylandViolationComponent } from './maryland-violation/maryland-violation.component';
import { CarTrendsComponent } from './car-trends/car-trends.component';
import { CovidComponent } from './covid/covid.component';

const routes: Routes = [
  { path: '', redirectTo: '/logIn', pathMatch: 'full' },
  { path: 'logIn', component: LoginComponent },
  { path: 'SignUp', component: SignUpComponent},
  { path: 'Welcome', component: WelcomePageComponent},
  { path: 'WeatherLocation', component: WeatherLocationComponent},
  { path: 'AgeTime', component: AgeTimeComponent},
  { path: 'Maryland', component: MarylandViolationComponent},
  { path: 'CarModel', component: CarTrendsComponent},
  { path: 'Covid', component: CovidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

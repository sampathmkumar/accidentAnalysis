import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  constructor(private router: Router) {}

  menuItems = [
    { title: 'Home', link: '/Welcome' },
    { title: 'Location & Weather Trends', link: '/WeatherLocation' },
    { title: 'Age groups & Time of day', link: '/AgeTime' },
    { title: 'Maryland Traffic Violation', link: '/Maryland' },
    { title: 'Car Brand Trends', link: '/CarModel' },
    { title: 'COVID', link: '/Covid' }
  ];

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}


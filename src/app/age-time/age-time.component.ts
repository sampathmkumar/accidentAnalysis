import { Component } from '@angular/core';

@Component({
  selector: 'app-age-time',
  templateUrl: './age-time.component.html',
  styleUrls: ['./age-time.component.css']
})
export class AgeTimeComponent {

  ageGroups: number[] =[];
  times: String[] = [];

  constructor() {
    for (let i = 18; i <= 80; i++) {
      this.ageGroups.push(i);
    }
    for( let i=0;i<=24;i++){
      this.times.push(i.toString()+':'+'00');
    }
  }


  menuItems = [
    { title: 'Home', link: '/Welcome' },
    { title: 'Location & Weather Trends', link: '/WeatherLocation' },
    { title: 'Age groups & Time of day', link: '/AgeTime' },
    { title: 'Maryland Traffic Violation', link: '/Maryland' },
    { title: 'Car Brand Trends', link: '/CarModel' },
    { title: 'COVID', link: '/Covid' }
  ];

  onSubmit(data:any){
    console.log(data);
  }

}

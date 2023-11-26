import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maryland-violation',
  templateUrl: './maryland-violation.component.html',
  styleUrls: ['./maryland-violation.component.css']
})
export class MarylandViolationComponent {

  violations: String[] =[];
  constructor(private http:HttpClient){
    this.http.get<string[]>(`http://localhost:3001/violations`)
    .subscribe((data)=>{
      this.violations = data;
      console.log(this.violations);
    }
    )
  }
  menuItems = [
    { title: 'Home', link: '/Welcome' },
    { title: 'Location & Weather Trends', link: '/WeatherLocation' },
    { title: 'Age groups & Time of day', link: '/AgeTime' },
    { title: 'Maryland Traffic Violation', link: '/Maryland' },
    { title: 'Car Brand Trends', link: '/CarModel' },
    { title: 'COVID', link: '/Covid' }
  ];

  onSubmit(data: any){
    console.log(data);
  }
}

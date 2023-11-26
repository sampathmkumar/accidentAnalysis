import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car-trends',
  templateUrl: './car-trends.component.html',
  styleUrls: ['./car-trends.component.css']
})
export class CarTrendsComponent {

  private apiUrl="xyz";

  carBrands: String[] = [];
  carModels: String[] = [];

  constructor(private http:HttpClient){
    this.http.get<string[]>(`http://localhost:3001/carBrands`)
    .subscribe((data)=>{
      this.carBrands = data;
      console.log(this.carBrands);
    })
  }

  onSelection(event: any){
    const selectedValue = event.target.value;
    console.log(selectedValue);
    this.getCarModels(selectedValue);
  }

  getCarModels(selectedValue: string){
    // this.http.get<string[]>(`${this.apiUrl}`, { params: { selectedValue } })
    this.http.get<string[]>(`${this.apiUrl}`)
    .subscribe((data)=>{
      this.carModels = data;
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

  brands = [
    {label: 'Hyundai', value:'Hyundai'},
    {label: 'Kia', value:'Kia'},
    {label: 'Ford', value:'Ford'},
    {label: 'Williams', value:'Williams'}
  ];

  models = [
    {label: 'Sedan', value:'Sedan'},
    {label: 'SUV', value:'SUV'},
    {label: 'XUV', value:'XUV'}
  ];

  onSubmit(data: any){
    console.log(data);
  }
}

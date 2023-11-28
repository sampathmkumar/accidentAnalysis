import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.css'],
})
export class WeatherLocationComponent{

  constructor(private http:HttpClient){
  }

  private apiUrl = 'http://localhost:3001/locations';
  locationValues: string[] = [];

  onSelection(event: any){
    const selectedValue = event.target.value;
    console.log(selectedValue);
    this.getLocationValues(selectedValue);
  }

  getLocationValues(selectedValue: string){
    console.log(selectedValue);
    // this.http.get<string[]>(`${this.apiUrl}`, { params: { selectedValue } })
    this.http.get<string[]>(`${this.apiUrl}`)
    .subscribe((data)=>{
      this.locationValues = data;
    }
    )
  }
  
  startDate = new Date(1990, 0, 1);

  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe();
  }

  menuItems = [
    { title: 'Home', link: '/Welcome' },
    { title: 'Location & Weather Trends', link: '/WeatherLocation' },
    { title: 'Age groups & Time of day', link: '/AgeTime' },
    { title: 'Maryland Traffic Violation', link: '/Maryland' },
    { title: 'Car Brand Trends', link: '/CarModel' },
    { title: 'COVID', link: '/Covid' }
  ];

  options = [
    { label: 'State', value: 'STATE' },
    { label: 'City', value: 'CITY' },
    { label: 'Zip', value: 'ZIP' }
  ];

  locations = [
    { label: 'Gainesville', value: 'Gainesville'},
    { label: 'Orlando', value: 'Orlando'}
  ];

  weathers = [
    { label: 'Winter', value: 'Winter'},
    { label: 'Rainy', value: 'Rainy'},
    { label: 'Snow', value: 'Snow'},
    { label: 'Summer', value: 'Summer'}
  ];

  onSubmit(data: any){
    console.log(data)
  }

  lineChart= new Chart({
    chart: {
      type: "spline"
   },
   title: {
      text: "Monthly Average Temperature"
   },
   subtitle: {
      text: "Source: WorldClimate.com"
   },
   xAxis:{
      categories:["Jan2016", "Feb2016", "Mar2016", "Apr2016", "May2016", "Jun2016",
      "Jul2016", "Aug2016", "Sep2016", "Oct2016", "Nov2016", "Dec2016","Jan2017", "Feb2017", "Mar2018", "Apr2018", "May2018", "Jun2018",
      "Jul2018", "Aug2018", "Sep2018", "Oct2018", "Nov2018", "Dec2018","Jan2019", "Feb2019", "Mar2019", "Apr2019", "May2019", "Jun2019",
      "Jul2019", "Aug2019", "Sep2019", "Oct2019", "Nov2019", "Dec2019","Jan2020", "Feb2020", "Mar2020", "Apr2020", "May2020", "Jun2020",
      "Jul2020", "Aug2020", "Sep2020", "Oct2020", "Nov2020", "Dec2020","Jan2021", "Feb2021", "Mar2021", "Apr2021", "May2021", "Jun2021",
      "Jul2021", "Aug2021", "Sep2021", "Oct2021", "Nov2021", "Dec2021","Jan2022", "Feb2022", "Mar2022", "Apr2022", "May2022", "Jun2022",
         "Jul2022", "Aug2022", "Sep2022", "Oct2022", "Nov2022", "Dec2022"]
   },
   yAxis: {          
      title:{
         text:"Temperature °C"
      } 
   },
   tooltip: {
      valueSuffix:" °C"
   },
   series: [{
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6
      ,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6,
      7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
   },
   {
      name: 'New York',
      data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
   },
   {
      name: 'Berlin',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
   },
   {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
   }] as any
  });
 
}

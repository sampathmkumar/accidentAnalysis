import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private router: Router, private http: HttpClient) { }

  navigateToLogIn() {
    console.log("Clicked");
    this.router.navigate(['/logIn']);
  }

  onSubmit(data: any) {
    if(data.password === data.confirmPassword){
      console.log(data);
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LoginComponent{

  constructor(private router: Router) { }

  navigateToSignUp() {
    console.log("Clicked");
    this.router.navigate(['/SignUp']);
  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required])
  });

  navigateToWelcome(data: any) {
    console.log(data);
    this.router.navigate(['/Welcome']);
  }
}

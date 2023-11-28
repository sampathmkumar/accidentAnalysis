import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private router: Router, private http: HttpClient) { }

  signUpResponse: String[]=[];

  private apiUrl='localhost:8080/api/users/signup'
  navigateToLogIn() {
    console.log("Clicked");
    this.router.navigate(['/logIn']);
  }

  onSubmit(data: any) {
    if(data.password === data.confirmPassword){
      this.http.post<string[]>(this.apiUrl,data)
      .subscribe((result)=>
        this.signUpResponse = result);
        console.log(this.signUpResponse);
    }
  }
}
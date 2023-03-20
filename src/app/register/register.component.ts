import { Component } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 "email": string;
 "password": string;
 "confirmPassword": string;
 "passwordError": boolean;

 constructor(public porfolioservice: PorfolioService, public router: Router){}

 register() {
  const user = {email: this.email, password: this.password};
  this.porfolioservice.register(user).subscribe(data =>{
    this.porfolioservice.setToken(data. token);
    this.router.navigateByUrl('/');
  },
  error => {
    console.log(error);
   });
 }
 }


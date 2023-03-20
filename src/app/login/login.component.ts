import { Component } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 "email": string;
 "password": string;

 constructor(public porfolioservice:PorfolioService, public router: Router) {}

login() {
  const user = {email: this.email, password: this.password};
  this.porfolioservice.login(user).subscribe( data => {
    this.porfolioservice.setToken(data. token);
    this.router.navigateByUrl('/');
  },
    error => {
      console.log(error);
   });
 }
}

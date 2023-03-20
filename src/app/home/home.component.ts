import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 constructor(public porfolioservice: PorfolioService) {}
 ngOnInit() {
   this.getUserLogged();
 }
 getUserLogged(){
  this.porfolioservice.getUser().subscribe(user => {
    console.log(user);
  });
 }
}

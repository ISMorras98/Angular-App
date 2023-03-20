import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'c:/proyectos app/app-angular/src/app/servicios/porfolio.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  miPorfolio:any;
 constructor(private datosporfolio:PorfolioService){}
  ngOnInit(): void {
    this.datosporfolio.obtenerdatos().subscribe(data =>{
     console.log(data);
     this.miPorfolio=data;
    })
 }
}

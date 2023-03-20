import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'c:/proyectos app/app-angular/src/app/servicios/porfolio.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit { 
  miPorfolio:any;
 constructor(private datosporfolio:PorfolioService){}
  ngOnInit(): void {
    this.datosporfolio.obtenerdatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    })
  }
}

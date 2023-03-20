import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'c:/proyectos app/app-angular/src/app/servicios/porfolio.service';


@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  miPorfolio:any;
 constructor(private datosporfolio:PorfolioService){}
  ngOnInit(): void {
    this.datosporfolio.obtenerdatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    })
  }
}

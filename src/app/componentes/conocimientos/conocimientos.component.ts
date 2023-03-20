import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'c:/proyectos app/app-angular/src/app/servicios/porfolio.service';


@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {
  miPorfolio:any;
 constructor(private datosporfolio:PorfolioService){}
  ngOnInit(): void {
    this.datosporfolio.obtenerdatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    })
  }
}

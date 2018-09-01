import { Component, OnInit } from '@angular/core';


import { DatosReg } from './interface1.model';

import { DatosPersonas } from './data1.model';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor() {
 
 // Datos 

  localDatosPersonas : DatosPersonas;
  //datos1 : TypeReg;
  //public datos = new DatosReg(datos1);
       
  }

  ngOnInit() {
  }

}

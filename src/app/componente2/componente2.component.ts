import { Component, OnInit } from '@angular/core';


import { TypeReg } from './interface1.model';

import { DatosPersonas } from './data1.model';
import { ContadoresType } from './proceso1.service';

// Injectable  - se importa el proceso de proceso1
import { proceso } from './proceso1.service';


@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
  


export class Componente2Component implements OnInit {
  
 //  En el contructor se adiciona el servicio
  // Injectable de proceso1.ts 
  constructor(public procesox:proceso) {


  }
  

  datosx = DatosPersonas;
  
    ngOnInit() 
    {}
    //{console.log(this.procesox); debugger;}
     
    public contadorLikex : number = 0;
    public contadorDLikex : number = 0;
    public contadorTotalx : number = 0;
    public nuIdPersona : number = 0;


    public setIdPersona(value) 
    {
      this.nuIdPersona = value;
      this.contadorLikex = DatosPersonas[this.nuIdPersona].contadorLike;
      this.contadorDLikex = DatosPersonas[this.nuIdPersona].contadorDisLike;    
      this.contadorTotalx = DatosPersonas[this.nuIdPersona].contadorTotal;      
      this.procesox.setDatos({
        contadorLike:this.contadorLikex,
        contadorDisLike:this.contadorDLikex,
        contadorTotal:this.contadorTotalx
      }
        );

      console.log("this.nuIdPersona:"+ this.nuIdPersona);
    }
    
    public pLikex() {
      this.procesox.pLike();

      //this.nuIdPersona = document.getElementById("Id");
      this.contadorLikex = this.procesox.RecContadores.contadorLike;
      this.contadorTotalx = this.procesox.RecContadores.contadorTotal;

      // variables de servicio a array de personas
      DatosPersonas[this.nuIdPersona].contadorLike = this.contadorLikex;
      DatosPersonas[this.nuIdPersona].contadorTotal = this.contadorTotalx;
  
      console.log("this.nuIdPersona:"+ this.nuIdPersona);
      console.log("this.contadorLikex:"+ this.contadorLikex);
      console.log("this.contadorTotalx:"+ this.contadorTotalx);


    }
 
    public pDisLikex() {
      this.procesox.pDisLike();
      // variables de servicio a array de personas
      this.contadorDLikex = this.procesox.RecContadores.contadorDisLike;
      this.contadorTotalx = this.procesox.RecContadores.contadorTotal;

      // variables de servicio a array de personas
      DatosPersonas[this.nuIdPersona].contadorDisLike = this.contadorDLikex;
      DatosPersonas[this.nuIdPersona].contadorTotal = this.contadorTotalx;
      console.log("this.nuIdPersona:"+ this.nuIdPersona);
      console.log("this.contadorDLikex:"+ this.contadorDLikex);
      console.log("this.contadorTotalx:"+ this.contadorTotalx);

    }


}

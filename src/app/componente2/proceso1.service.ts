
// Injectable  --> para poder usar el codigo tal 
// como si estuviera en otra clase 
// se debe adicionar en app.modules.ts la clase 
//             --> providers: [proceso],
// se puede registrar en el modulo o en componente

import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';


export interface ContadoresType
{
  contadorLike:number;
  contadorDisLike:number;
  contadorTotal:number;
}

// Injectable  --> en la clase a reusar 
// (se usara en component2.component.ts)
@Injectable()
export class proceso 
{

  private observer = new Subject();
  
  constructor() { 
  }

  public RecContadores : ContadoresType =
  {
    contadorLike:0,
    contadorDisLike:0,
    contadorTotal:0
  }
  getDatos(){return this.RecContadores; }
  setDatos(value) {this.RecContadores = value;}
  
  pLike ()
  {
    this.RecContadores.contadorLike = this.RecContadores.contadorLike+1;
    if (this.RecContadores.contadorDisLike > 0)
    this.RecContadores.contadorDisLike = this.RecContadores.contadorDisLike-1;
    this.RecContadores.contadorTotal = this.RecContadores.contadorTotal + 1;
  }

  pDisLike ()
  {
    this.RecContadores.contadorDisLike = this.RecContadores.contadorDisLike+1;
    if (this.RecContadores.contadorLike > 0)
    this.RecContadores.contadorLike = this.RecContadores.contadorLike-1;
    this.RecContadores.contadorTotal = this.RecContadores.contadorTotal + 1;
  }
  
  ngOnInit() {
  }

}




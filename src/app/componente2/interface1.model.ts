export interface TypeReg
{
  nombre:string;
  urlImagen:string;
  urlIcono:string;
  contadorLike:number;
  contadorDisLike:number;
  contadorTotal:number;
}

export class DatosReg 
{
  constructor(public Registro : TypeReg) {};
}
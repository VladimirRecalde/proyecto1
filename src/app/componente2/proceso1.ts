export interface ContadoresType
{
  contadorLike:number;
  contadorDisLike:number;
  contadorTotal:number;
}

export class proceso 
{
  constructor() { }
  public RecContadores : ContadoresType;

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




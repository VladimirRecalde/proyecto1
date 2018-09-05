//ng generate component components/inicio --module modules/inicio/inicio-routing.module

import { Component, OnInit } from '@angular/core';

import { Componente1Component } from '../../componente1/componente1.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

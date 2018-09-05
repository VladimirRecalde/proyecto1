// ng generate module modules/inicio --routing true


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

import { Componente1Component } from '../../componente1/componente1.component';

// componente 1 para el ejemplo

@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
    declarations: [Componente1Component]
})
export class InicioModule { }


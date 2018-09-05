///* Ejemplo de Router 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './modules/inicio/inicio-routing.module';

// componente 1 para el ejemplo
import { Componente1Component } from './componente1/componente1.component';

@NgModule({
   declarations: [
    Componente1Component,
     ],
    imports: [
        CommonModule,
        InicioRoutingModule
    ]
})

export class AppModule { }
//*/

/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';

// servicio a usar en el componente2
import { proceso } from './componente2/proceso1.service';

// uso del router 
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: '1p', component: Componente1Component },
  { path: '2p', component: Componente2Component },
  { path: '3p', component: Componente3Component},
  { path: '4p', component: Componente4Component},
];

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    OpcionesComponent,
    ComponenteHijoComponent
   
  ],
  imports: [
     
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes) ,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // uso del router
    AppRoutingModule

  ],
  
  providers: [proceso],
  bootstrap: [AppComponent]
})
export class AppModule { }
//*/
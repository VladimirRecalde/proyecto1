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
    OpcionesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


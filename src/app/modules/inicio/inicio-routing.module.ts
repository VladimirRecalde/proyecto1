//  ejemplo adicion de Router
// solo maneja ls rutas de app.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from '../../components/inicio/inicio.component';
import { DetalleComponent } from '../../components/detalle/detalle.component';

const routes: Routes = [

    { path: '', component: InicioComponent },
    // ruta principal , componente a mostrar al ingresar a esa ruta
];

@NgModule({
    imports: [RouterModule.forChild(routes)], // Modulo funcional
    exports: [RouterModule], // Listo para exportar
    declarations: [InicioComponent, DetalleComponent]
})

export class InicioRoutingModule { }


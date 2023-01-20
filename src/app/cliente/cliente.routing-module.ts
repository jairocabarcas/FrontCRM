import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { RegistroComponent } from './registro/registro.component';
import { ActualizarComponent } from './actualizar/actualizar.component';

const routes: Routes =[
    {
        path: "listar",
        component: ListadoComponent
    },
    {
        path: "registrar",
        component: RegistroComponent
    },
    {
        path: "actualizar/:id",
        component: ActualizarComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ClienteRoutingModule{}
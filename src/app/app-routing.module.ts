import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path:"app",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "/app"
  },
  {
    path: "cliente",
    loadChildren: () => import ("./cliente/cliente.module")
    .then(modulo => modulo.ClienteModule)

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

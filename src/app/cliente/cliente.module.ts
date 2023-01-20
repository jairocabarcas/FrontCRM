import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ClienteRoutingModule } from './cliente.routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FiltroContactosPipe } from './filtro-contactos.pipe';



@NgModule({
  declarations: [
    RegistroComponent,
    ListadoComponent,
    ActualizarComponent,
    FiltroContactosPipe,
    
    
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ]
})
export class ClienteModule { }

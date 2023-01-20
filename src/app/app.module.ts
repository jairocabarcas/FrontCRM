import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { MenuComponent } from './plantilla/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { ClienteModule } from "./cliente/cliente.module";

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        MenuComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ClienteModule
    ]
})
export class AppModule { }

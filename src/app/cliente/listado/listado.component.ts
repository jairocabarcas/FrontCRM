import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/modelo/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  clientes: ClienteModel[]=[];
  clientesTotales : ClienteModel[] =[];

  findCliente=''

  constructor(
    private clienteService: ClienteService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes():void{
    this.clienteService.findAll().subscribe(
      (clientes)=>{
        this.clientes=clientes;
      }
    )
  }

  agregar():void{
    this.router.navigate(["cliente/registrar"]);
  }

  refresh(){
    //this.findCliente=dato
    console.log()
    window.location.reload();
  
  }
}

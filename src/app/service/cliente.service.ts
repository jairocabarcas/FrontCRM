import { Injectable } from '@angular/core';
import { ClienteModel } from '../modelo/cliente.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { configuracion } from '../configuraciones.json';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = configuracion.urlapi;

  constructor(
    private http:HttpClient
  ) { }

  create(cliente: ClienteModel): Observable<ClienteModel>{
    return this.http.post(this.url+"clientes",{
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      identificacion: cliente.identificacion,
      email: cliente.email,
      direccion: cliente.direccion,
      telefono: cliente.telefono,
      tipo: cliente.tipo,
      origen: cliente.origen,
      fechaNacimiento: cliente.fechaNacimiento
    },{
      headers: new HttpHeaders({})
    })
  }

  findAll(): Observable<ClienteModel[]>{
    return this.http.get<ClienteModel[]>(this.url+"clientes");
  }
  findById(id:any): Observable<ClienteModel>{
    return this.http.get<ClienteModel>(this.url+"clientes/"+id);
  }

  update(cliente:ClienteModel, id:any):Observable<ClienteModel>{
    return this.http.put(this.url+"clientes/"+id,{
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      identificacion: cliente.identificacion,
      email: cliente.email,
      direccion: cliente.direccion,
      telefono: cliente.telefono,
      tipo: cliente.tipo,
      origen: cliente.origen,
      fechaNacimiento: cliente.fechaNacimiento
    },{
      headers: new HttpHeaders({})
    })
  }
}

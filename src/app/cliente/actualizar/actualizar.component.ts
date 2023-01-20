import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/modelo/cliente.model'; 
import { FormBuilder, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  id:any
  cliente: ClienteModel = new ClienteModel();
  origenes :string []=["Origen 1", "Origen 2", "Origen 3"];
  tiposPredeterminado :string []=["Tipo 1", "Tipo 2", "Tipo 3"];

  public fgValidador: FormGroup = this.fb.group(
    {
      'nombre': (['',[Validators.required]]),
      'apellido':(['',[Validators.required]]),
      'identificacion':(['',[Validators.required]]),
      'fechaNacimiento': (['',[Validators.required]]),
      'email': (['',[Validators.required, Validators.email]]),
      'telefono': (['',[Validators.required]]),
      'direccion': (['',[Validators.required]]),
      'tipo': (['',[Validators.required]]),
      'origen':  (['',[Validators.required]])
    }
  );

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private clienteService: ClienteService,
    private routerParam: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    
    this.routerParam.paramMap.pipe().subscribe((paramMap:any)=>{
      const {params}= paramMap;
      this.id=params.id
    })

    this.clienteService.findById(this.id).subscribe((cliente:ClienteModel)=>{
      cliente.fechaNacimiento=cliente.fechaNacimiento?.replace('/','-')
      cliente.fechaNacimiento=cliente.fechaNacimiento?.replace('/','-')
      console.log(cliente.fechaNacimiento)
      this.cliente=cliente
    })
    console.log('cliente origen '+this.cliente.origen)
  }

  async update(){

    let nombre = this.fgValidador.controls['nombre'];
    let apellido = this.fgValidador.controls['apellido'].value;
    let identificacion = this.fgValidador.controls['identificacion'].value;
    let fechaNacimiento = this.fgValidador.controls['fechaNacimiento'].value;
    let direccion = this.fgValidador.controls['direccion'].value;
    let tipo = this.fgValidador.controls['tipo'].value;
    let origen = this.fgValidador.controls['origen'].value;
    let email = this.fgValidador.controls['email'].value;
    let telefono = this.fgValidador.controls['telefono'].value;
    console.log(this.fgValidador.valid)
    if(this.fgValidador.valid){
      this.clienteService.update(this.cliente,this.cliente.id).subscribe(
        ((datos)=>{
          if(datos){
            alert("Datos Actualizados con exito");
            this.router.navigate([""]);
          }else{
            alert("No se pudo registrar");
          }
        }))
    }else{
      alert("Faltan datos por llenar")
    }

  }

  cancelar():void{
    console.log("cancelar")
    this.router.navigate(["cliente/listar"]);
  }

}

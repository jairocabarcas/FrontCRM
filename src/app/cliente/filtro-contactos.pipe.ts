import { Pipe, PipeTransform } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Pipe({
  name: 'filtroContactos'
})
export class FiltroContactosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultados=[];
    
    for(const post of value){
      console.log(arg)
      let nombre = ' '+post.nombre+' '+post.apellido
      if((post.nombre.indexOf(arg, 0)>-1)){
        resultados.push(post);
      }
    }
    return resultados;
  }

}

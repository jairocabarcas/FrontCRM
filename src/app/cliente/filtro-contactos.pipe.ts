import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroContactos'
})
export class FiltroContactosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultados=[];
    for(const post of value){
      if((post.nombre.indexOf(arg)>-1)||(post.apellido.indexOf(arg)>-1)){
        resultados.push(post);
      }
    }
    return resultados;
  }

}

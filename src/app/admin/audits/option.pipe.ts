import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'option'
})
export class OptionPipe implements PipeTransform {
  transform(value: string): string {
    switch(value){
      case 'true/false': return 'Verdadero | Falso';
      case 'description': return 'El auditor elabora la respuesta con una descripcion';
      case 'default': return 'Nunca | Rara vez | Algunas Veces | Frecuentemente | Siempre';
      case 'iso': return 'Mayor No-Conformidad | Menor No-Conformidad | Oportunidad de Mejora | Obediente';
    }
    return null;
  }
  //return `<b>${content}</b>`;
  /*
  'Obediente', value: 25 }, 
       {option:'Oportunidad de Mejora', value: 50 }, 
       {option:'No Conformidad Menor', value: 75 }, 
       {option:'No Conformidad Mayor 
  */
}

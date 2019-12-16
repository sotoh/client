import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'def1': return 'Siempre';
      case 'def2': return 'Frecuentemente';
      case 'def3': return 'Algunas veces';
      case 'def4': return 'Rara vez';
      case 'def5': return 'Nunca';
    }
    return null;
  }

}

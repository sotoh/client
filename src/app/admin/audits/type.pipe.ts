import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'check': return 'Checklist';
      case 'range': return 'Opcion Múltiple';
      case 'description': return 'Caja de Texto';      
    }
    return null;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): any {
    switch(value){
      case 'pending': return 'Pendiente';
      case 'completed': return 'Completado';
      case 'uninitiated': return 'Sin Iniciar';      
    }
    return null;
  }

}

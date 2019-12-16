import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isorange'
})
export class IsorangePipe implements PipeTransform {

  transform(value:string): string {
    switch(value){
      case 'iso1': return 'Obediente';
      case 'iso2': return 'Oportunidad de Mejora';
      case 'iso3': return 'Menor No-Conformidad';
      case 'iso4': return 'Mayor No-Conformidad';
    }
    return null;
  }

}

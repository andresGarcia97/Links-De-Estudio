import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    if (texto === '') {
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter(item => {
      return item?.titulo?.toLowerCase().includes(texto) ||
        item?.tittleShort?.toLowerCase().includes(texto) ||
        item?.componente?.toLowerCase().includes(texto);
    });
  }

}

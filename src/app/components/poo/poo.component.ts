import { Component } from '@angular/core';
import { POO } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html'
})
export class PooComponent extends LinkReferencia {

  items = POO;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['poo', 'POO'],
    ['pooPilares', 'Pilares POO'],
    ['composicion', 'Relaciones'],
    ['pooStatic', 'Static en POO'],
    ['sobrecarga', 'Sobrecargar Metodos'],
    ['acoplamiento', 'Acoplamiento'],
    ['contratos', 'Contratos'],
    ['descomposicion', 'Descomposición'],
    ['herencia', 'Herencia'],
    ['polimorfismo', 'Polimorfismo'],
    ['herVScomp', 'Herencia/Composición'],
    ['enlaces', 'Enlaces'],
    ['acoplamientoComponentes', 'SDP, ADP, SAP'],
    ['beginingPoo', 'Inicios de POO']
  ]);

}

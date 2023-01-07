import { Component } from '@angular/core';
import { PATRONES } from 'src/app/models/content/content2';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-patrones',
  templateUrl: './patrones.component.html'
})
export class PatronesComponent extends LinkReferencia {

  items = PATRONES;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['definicionPatrones', 'Definición'],
    ['tiposDePatrones', 'Tipos de Patrones'],
    ['gof', 'GOF'],
    ['desglosegof', 'Desglose GOF'],
    ['grasp', 'GRASP'],
    ['desglosegrasp', 'Desglose Grasp'],
    ['dao', 'DAO & Active Record'],
    ['antipatrones', 'Anti Patrones'],
    ['dobleDespacho', 'Doble despacho'],
    ['patronSaga', 'Patron saga'],
    ['patroncqrs', 'Patron CQRS'],
    ['patronUndoRedo', 'Patron undo-redo'],
  ]);

}

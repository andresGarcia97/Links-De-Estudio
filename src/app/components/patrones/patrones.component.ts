import { Component } from '@angular/core';
import { PATRONES } from 'src/app/models/content/content2';
import { PATRONES_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-patrones',
  templateUrl: './patrones.component.html'
})
export class PatronesComponent {

  items = PATRONES;

  components = new Map([ ...PATRONES_REF ]);

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
    ['stranglerFig', 'StranglerFig App'],
  ]);

}

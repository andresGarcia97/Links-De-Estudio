import { Component, OnInit } from '@angular/core';
import { PATRONES } from 'src/app/models/content/content2';
import { PATRONES_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-patrones',
  templateUrl: './patrones.component.html'
})
export class PatronesComponent implements OnInit {

  items = PATRONES;

  components = new Map([ ...PATRONES_REF ]);

  itemStart = '';

  tittles = new Map<string, string>([
    ['definicionPatrones', 'Definición'],
    ['tiposDePatrones', 'Tipos de Patrones'],
    ['gof', 'GOF'],
    ['desglosegof', 'Desglose GOF'],
    ['grasp', 'GRASP'],
    ['desglosegrasp', 'Desglose Grasp'],
    ['dao', 'DAO & Active Record'],
    ['antipatronesDev', 'Anti Patrones, Desarrollo'],
    ['dobleDespacho', 'Doble despacho'],
    ['patronSaga', 'Patron saga'],
    ['patroncqrs', 'Patron CQRS'],
    ['patronUndoRedo', 'Patron undo-redo'],
    ['stranglerFig', 'StranglerFig App'],
    ['antipatronesPM', 'Anti Patrones, PM'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

import { Component, OnInit } from '@angular/core';
import { REFACTORIZACION } from 'src/app/models/content/content3';
import { REFACTORING } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-refactorizacion',
  templateUrl: './refactorizacion.component.html'
})
export class RefactorizacionComponent implements OnInit {

  items = REFACTORIZACION;

  itemStart = '';

  components = new Map([ ...REFACTORING ]);

  tittles = new Map<string, string>([
    ['codigolimpio', 'Codigó limpio'],
    ['deudatecnica', 'Deuda tecnica'],
    ['tiposDeudaTecnica', 'Tipos de deuda'],
    ['comentarios', 'Comentar la deuda'],
    ['cuandorefactorizar', '¿ Cuando ?'],
    ['comorefactorizar', '¿ Como ?'],
    ['tecnicasRefactoring', 'Tecnicas'],
    ['cuandoNoRefactorizar', 'Cuando No'],
    ['refactorLegacyCode', 'Refactor en Legacy code'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

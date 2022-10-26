import { Component } from '@angular/core';
import { CONOCIMIENTOS_EMPIRICOS } from 'src/app/models/content/content2';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-conocimientos-empiricos',
  templateUrl: './conocimientos-empiricos.component.html'
})
export class ConocimientosEmpiricosComponent extends LinkReferencia {

  items = CONOCIMIENTOS_EMPIRICOS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['cristales', 'Cristales rotos'],
    ['quo', 'Status Quo'],
    ['costo', 'Costo Hundido'],
    ['tiposProgramadores', 'Programadores'],
    ['sesgos', 'Sesgo Cognitivo'],
    ['prejuicios', 'Prejuicios'],
    ['multitarea', 'Multitareas'],
    ['maxwellCurve', 'Curva de Maxwell'],
    ['dunningKruger', 'Dunning-Kruger'],
    ['reforzamientoSkinner', 'Reforzamiento'],
    ['pastaTheory', 'Codigo como pasta']
  ]);

}

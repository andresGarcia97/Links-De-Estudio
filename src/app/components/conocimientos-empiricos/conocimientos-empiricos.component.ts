import { Component, OnInit } from '@angular/core';
import { CONOCIMIENTOS_EMPIRICOS } from 'src/app/models/content/content2';
import { CONOCIMIENTO_EMPIRICO } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-conocimientos-empiricos',
  templateUrl: './conocimientos-empiricos.component.html'
})
export class ConocimientosEmpiricosComponent implements OnInit {

  items = CONOCIMIENTOS_EMPIRICOS;

  components = new Map([ ...CONOCIMIENTO_EMPIRICO ]);

  itemStart = '';

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
    ['pastaTheory', 'Codigo como pasta'],
    ['thingsThatAreNotTaught', 'Cosas que no se enseñan']
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

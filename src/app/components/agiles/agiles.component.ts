import { Component } from '@angular/core';
import { AGILES } from 'src/app/models/content/content1';
import { AGILES_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-agiles',
  templateUrl: './agiles.component.html'
})
export class AgilesComponent {

  items = AGILES;

  components = new Map([ ...AGILES_REF ]);

  tittles = new Map<string, string>([
    ['moscow', 'MOSCOW'],
    ['scoring', 'Theme Scoring'],
    ['muda', 'Desperdicio'],
    ['5s', '5-S'],
    ['muda#1', 'Muda #1'],
    ['muda#2', 'Muda #2'],
    ['planningPoker', 'Planning Poker'],
    ['manifestAgil', 'Manifiesto Agil'],
    ['principlesAgile', 'Principios'],
    ['spike', 'Spike'],
    ['deming', 'Ciclo de Deming'],
  ]);

}

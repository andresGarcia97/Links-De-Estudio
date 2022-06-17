import { Component } from '@angular/core';
import { AGILES } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-agiles',
  templateUrl: './agiles.component.html'
})
export class AgilesComponent extends LinkReferencia {

  items = AGILES;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['moscow', 'MOSCOW'],
    ['scoring', 'Theme Scoring'],
    ['muda', 'Desperdicio'],
    ['5s', '5s'],
    ['muda#1', 'Muda #1'],
    ['muda#2', 'Muda #2'],
    ['planningPoker', 'Planning Poker']
  ]);

}

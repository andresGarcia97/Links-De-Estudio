import { Component } from '@angular/core';
import { PRINCIPIOS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-principios',
  templateUrl: './principios.component.html'
})
export class PrincipiosComponent extends LinkReferencia {

  items = PRINCIPIOS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['solid', 'SOLID'],
    ['kiss', 'KISS'],
    ['yagni', 'YAGNI'],
    ['occam', 'Occam'],
    ['dry', 'DRY'],
    ['hollywood', 'Hollywood'],
    ['tellDontAsk', 'TDA'],
    ['stupid', 'STUPID'],
    ['twice-one', '2-1'],
    ['divide-conquer', 'Dividir y Conquistar']
  ]);

}

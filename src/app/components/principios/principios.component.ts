import { Component } from '@angular/core';
import { PRINCIPIOS } from 'src/app/models/content/content3';
import { PRINCIPIOS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-principios',
  templateUrl: './principios.component.html'
})
export class PrincipiosComponent {

  items = PRINCIPIOS;

  components = new Map([ ...PRINCIPIOS_REF ]);

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

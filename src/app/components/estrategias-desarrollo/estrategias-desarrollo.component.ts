import { Component } from '@angular/core';
import { ESTATEGIAS_DESARROLLO } from 'src/app/models/content/content2';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-estrategias-desarrollo',
  templateUrl: './estrategias-desarrollo.component.html'
})
export class EstrategiasDesarrolloComponent extends LinkReferencia {

  items = ESTATEGIAS_DESARROLLO;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['ddd', 'DDD'],
    ['bdd', 'BDD'],
    ['tdd', 'TDD'],
    ['atdd', 'ATDD'],
    ['analisis', 'Enfoques'],
    ['tld', 'TLD vs TDD'],
    ['bduf', 'BDUF']
  ]);

}

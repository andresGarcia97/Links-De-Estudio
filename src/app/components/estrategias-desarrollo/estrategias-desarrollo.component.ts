import { Component } from '@angular/core';
import { ESTATEGIAS_DESARROLLO } from 'src/app/models/content/content2';
import { ESTRATEGIAS_DESARROLLO_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-estrategias-desarrollo',
  templateUrl: './estrategias-desarrollo.component.html'
})
export class EstrategiasDesarrolloComponent {

  items = ESTATEGIAS_DESARROLLO;

  components = new Map([ ...ESTRATEGIAS_DESARROLLO_REF ]);

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

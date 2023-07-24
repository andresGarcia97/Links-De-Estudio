import { Component, OnInit } from '@angular/core';
import { ESTATEGIAS_DESARROLLO } from 'src/app/models/content/content2';
import { ESTRATEGIAS_DESARROLLO_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-estrategias-desarrollo',
  templateUrl: './estrategias-desarrollo.component.html'
})
export class EstrategiasDesarrolloComponent implements OnInit {

  items = ESTATEGIAS_DESARROLLO;

  components = new Map([ ...ESTRATEGIAS_DESARROLLO_REF ]);

  itemStart = '';

  tittles = new Map<string, string>([
    ['ddd', 'DDD'],
    ['bdd', 'BDD'],
    ['tdd', 'TDD'],
    ['atdd', 'ATDD'],
    ['analisis', 'Enfoques'],
    ['tld', 'TLD vs TDD'],
    ['bduf', 'BDUF']
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

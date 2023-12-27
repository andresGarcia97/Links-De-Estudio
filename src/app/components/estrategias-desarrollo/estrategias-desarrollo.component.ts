import { Component, OnInit } from '@angular/core';
import { ESTATEGIAS_DESARROLLO } from 'src/app/models/content/content2';
import { AGILES_KEY, CD_CI_KEY, ESTRATEGIAS_DESARROLLO_REF, LinkReferencia, METODOLOGIAS_KEY, REQUISITOS_KEY, TESTING_KEY } 
from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-estrategias-desarrollo',
  templateUrl: './estrategias-desarrollo.component.html'
})
export class EstrategiasDesarrolloComponent implements OnInit {

  items = ESTATEGIAS_DESARROLLO;

  components = ESTRATEGIAS_DESARROLLO_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...ESTRATEGIAS_DESARROLLO_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CD_CI_KEY,        routes.get(CD_CI_KEY)!);
    this.relatedSections.set(AGILES_KEY,       routes.get(AGILES_KEY)!);
    this.relatedSections.set(TESTING_KEY,      routes.get(TESTING_KEY)!);
    this.relatedSections.set(METODOLOGIAS_KEY, routes.get(METODOLOGIAS_KEY)!);
    this.relatedSections.set(REQUISITOS_KEY,   routes.get(REQUISITOS_KEY)!);
  }

}

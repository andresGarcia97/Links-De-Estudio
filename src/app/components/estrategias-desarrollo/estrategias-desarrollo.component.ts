import { Component, OnInit } from '@angular/core';
import { ESTRATEGIAS_DESARROLLO } from 'src/app/models/content/content4';
import { AGILES_KEY, ARQUITECTURAS_KEY, CI_CD_KEY, ESTRATEGIAS_DESARROLLO_REF, LinkReferencia, METODOLOGIAS_KEY,
  PATRONES_KEY, REFACTORING_KEY, REQUISITOS_KEY, TESTING_KEY }
  from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-estrategias-desarrollo',
    templateUrl: './estrategias-desarrollo.component.html',
    standalone: false
})
export class EstrategiasDesarrolloComponent implements OnInit {

  items = ESTRATEGIAS_DESARROLLO;

  components = ESTRATEGIAS_DESARROLLO_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...ESTRATEGIAS_DESARROLLO_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ARQUITECTURAS_KEY, routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(METODOLOGIAS_KEY,  routes.get(METODOLOGIAS_KEY)!);
    this.relatedSections.set(REQUISITOS_KEY,    routes.get(REQUISITOS_KEY)!);
    this.relatedSections.set(TESTING_KEY,       routes.get(TESTING_KEY)!);
    this.relatedSections.set(AGILES_KEY,        routes.get(AGILES_KEY)!);
    this.relatedSections.set(CI_CD_KEY,         routes.get(CI_CD_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      PATRONES_KEY,    routes.get(PATRONES_KEY)!,
      REFACTORING_KEY, routes.get(REFACTORING_KEY)!
    );
  }

}

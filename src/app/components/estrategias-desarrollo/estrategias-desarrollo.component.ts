import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AGILES_KEY, ARQUITECTURAS_KEY, CI_CD_KEY, ESTRATEGIAS_DESARROLLO_REF, LinkReferencia, METODOLOGIAS_KEY,
  PATRONES_ADVANCED_KEY, REFACTORING_KEY, REQUISITOS_KEY, TESTING_KEY }
  from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { ESTRATEGIAS_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-estrategias-desarrollo',
    templateUrl: './estrategias-desarrollo.component.html',
    standalone: false
})
export class EstrategiasDesarrolloComponent implements OnInit {

  items: Item[] = [];

  components = ESTRATEGIAS_DESARROLLO_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...ESTRATEGIAS_DESARROLLO_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[ESTRATEGIAS_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ARQUITECTURAS_KEY, routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(METODOLOGIAS_KEY,  routes.get(METODOLOGIAS_KEY)!);
    this.relatedSections.set(REQUISITOS_KEY,    routes.get(REQUISITOS_KEY)!);
    this.relatedSections.set(TESTING_KEY,       routes.get(TESTING_KEY)!);
    this.relatedSections.set(AGILES_KEY,        routes.get(AGILES_KEY)!);
    this.relatedSections.set(CI_CD_KEY,         routes.get(CI_CD_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      PATRONES_ADVANCED_KEY, routes.get(PATRONES_ADVANCED_KEY)!,
      REFACTORING_KEY,       routes.get(REFACTORING_KEY)!
    );
  }

}

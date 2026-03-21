import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ANALISIS_KEY, META_CARACTERISTICAS_KEY, LinkReferencia, PARADIGMAS_REF, PATRONES_KEY, PRINCIPIOS_KEY, POO_KEY } 
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { PARADIGMAS_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-paradigmas',
    templateUrl: './paradigmas.component.html',
    standalone: false
})
export class ParadigmasComponent  implements OnInit {

  items: Item[] = [];

  components = PARADIGMAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PARADIGMAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[PARADIGMAS_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(META_CARACTERISTICAS_KEY, routes.get(META_CARACTERISTICAS_KEY)!);
    this.relatedSections.set(PRINCIPIOS_KEY,           routes.get(PRINCIPIOS_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,             routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,             routes.get(PATRONES_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      PRINCIPIOS_KEY, routes.get(PRINCIPIOS_KEY)!,
      POO_KEY,        routes.get(POO_KEY)!
    );
  }

}

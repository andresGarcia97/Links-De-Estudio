import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AGILES_KEY, ARQUITECTURAS_KEY, LinkReferencia, REQUISITOS_KEY, TESTING_ADVANCED_KEY, TESTING_REF, UML_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { TESTING_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-pruebas',
    templateUrl: './pruebas.component.html',
    standalone: false
})
export class PruebasComponent implements OnInit {

  items: Item[] = [];
  
  components = TESTING_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...TESTING_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[TESTING_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(TESTING_ADVANCED_KEY, routes.get(TESTING_ADVANCED_KEY)!);
    this.relatedSections.set(ARQUITECTURAS_KEY,    routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(REQUISITOS_KEY,       routes.get(REQUISITOS_KEY)!);
    this.relatedSections.set(AGILES_KEY,           routes.get(AGILES_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      UML_KEY,              routes.get(UML_KEY)!,
      TESTING_ADVANCED_KEY, routes.get(TESTING_ADVANCED_KEY)!
    );
  }

}

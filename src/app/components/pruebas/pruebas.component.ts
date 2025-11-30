import { Component, OnInit } from '@angular/core';
import { TESTING } from 'src/app/models/content/content2';
import { AGILES_KEY, ARQUITECTURAS_KEY, LinkReferencia, REQUISITOS_KEY, TESTING_ADVANCED_KEY, TESTING_REF, UML_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-pruebas',
    templateUrl: './pruebas.component.html',
    standalone: false
})
export class PruebasComponent implements OnInit {

  items = TESTING;
  
  components = TESTING_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...TESTING_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
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

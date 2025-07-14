import { Component, OnInit } from '@angular/core';
import { POO } from 'src/app/models/content/content4';
import {
  ARQUITECTURAS_KEY, ESTRATEGIAS_DESARROLLO_KEY, LinkReferencia, PARADIGMAS_KEY, PATRONES_KEY, POO_REF, PRINCIPIOS_KEY, UML_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html'
})
export class PooComponent implements OnInit {

  items = POO;

  components = POO_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...POO_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ESTRATEGIAS_DESARROLLO_KEY, routes.get(ESTRATEGIAS_DESARROLLO_KEY)!);
    this.relatedSections.set(ARQUITECTURAS_KEY,          routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(PARADIGMAS_KEY,             routes.get(PARADIGMAS_KEY)!);
    this.relatedSections.set(PRINCIPIOS_KEY,             routes.get(PRINCIPIOS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,               routes.get(PATRONES_KEY)!);
    this.relatedSections.set(UML_KEY,                    routes.get(UML_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      PARADIGMAS_KEY,    routes.get(PARADIGMAS_KEY)!,
      ARQUITECTURAS_KEY, routes.get(ARQUITECTURAS_KEY)!
    );
  }

}

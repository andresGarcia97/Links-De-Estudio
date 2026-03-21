import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ARQUITECTURAS_KEY, ESTRATEGIAS_DESARROLLO_KEY, LinkReferencia, PARADIGMAS_KEY, PATRONES_KEY, POO_REF, PRINCIPIOS_KEY, UML_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { POO_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-poo',
    templateUrl: './poo.component.html',
    standalone: false
})
export class PooComponent implements OnInit {

  items: Item[] = [];

  components = POO_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...POO_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[POO_PATH.propertyNameData];
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

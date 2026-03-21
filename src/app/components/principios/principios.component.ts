import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARQUITECTURAS_KEY, LinkReferencia, PARADIGMAS_KEY, PATRONES_KEY, POO_KEY, PRINCIPIOS_REF }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { PRINCIPIOS_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-principios',
    templateUrl: './principios.component.html',
    standalone: false
})
export class PrincipiosComponent implements OnInit {

  items: Item[] = [];
  
  components = PRINCIPIOS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PRINCIPIOS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[PRINCIPIOS_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ARQUITECTURAS_KEY, routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(PARADIGMAS_KEY,    routes.get(PARADIGMAS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,      routes.get(PATRONES_KEY)!);
    this.relatedSections.set(POO_KEY,           routes.get(POO_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      '',             '',
      PARADIGMAS_KEY, routes.get(PARADIGMAS_KEY)!
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { PRINCIPIOS } from 'src/app/models/content/content3';
import { ARQUITECTURAS_KEY, LinkReferencia, PARADIGMAS_KEY, PATRONES_KEY, POO_KEY, PRINCIPIOS_REF }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
  selector: 'app-principios',
  templateUrl: './principios.component.html'
})
export class PrincipiosComponent implements OnInit {

  items = PRINCIPIOS;
  
  components = PRINCIPIOS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PRINCIPIOS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
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

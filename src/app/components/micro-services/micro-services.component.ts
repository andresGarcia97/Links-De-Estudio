import { Component, OnInit } from '@angular/core';
import { MICRO_SERVICES } from 'src/app/models/content/content5';
import { 
  ANALISIS_KEY, ARQUITECTURAS_KEY, LinkReferencia, MALAS_PRACTICAS_KEY, MICRO_SERVICES_REF,
  NEURO_MARKETING_KEY, NUBE_KEY, PATRONES_KEY, PERSISTENCY_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-micro-services',
    templateUrl: './micro-services.component.html',
    standalone: false
})
export class MicroServicesComponent implements OnInit {

  items = MICRO_SERVICES;

  components = MICRO_SERVICES_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...MICRO_SERVICES_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(MALAS_PRACTICAS_KEY, routes.get(MALAS_PRACTICAS_KEY)!);
    this.relatedSections.set(ARQUITECTURAS_KEY,   routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(PERSISTENCY_KEY,     routes.get(PERSISTENCY_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,        routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,        routes.get(PATRONES_KEY)!);
    this.relatedSections.set(NUBE_KEY,            routes.get(NUBE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      NEURO_MARKETING_KEY, routes.get(NEURO_MARKETING_KEY)!,
      '',                  ''
    );
  }

}

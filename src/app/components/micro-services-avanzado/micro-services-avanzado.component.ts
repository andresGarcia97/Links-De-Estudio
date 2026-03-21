import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ANALISIS_KEY, ARQUITECTURAS_KEY, LinkReferencia, MALAS_PRACTICAS_KEY, MICRO_SERVICES_ADVANCED_REF, MICRO_SERVICES_KEY, 
  NUBE_KEY, PATRONES_KEY, PERSISTENCY_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { MICROSERVICES_ADVANCED_PATH } from 'src/app/models/relationsSummary';

@Component({
  selector: 'app-micro-services-avanzado',
  templateUrl: './micro-services-avanzado.component.html',
  standalone: false
})
export class MicroServicesAvanzadoComponent implements OnInit {

  items: Item[] = [];

  components = MICRO_SERVICES_ADVANCED_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...MICRO_SERVICES_ADVANCED_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[MICROSERVICES_ADVANCED_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(MALAS_PRACTICAS_KEY, routes.get(MALAS_PRACTICAS_KEY)!);
    this.relatedSections.set(MICRO_SERVICES_KEY,  routes.get(MICRO_SERVICES_KEY)!);
    this.relatedSections.set(ARQUITECTURAS_KEY,   routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(PERSISTENCY_KEY,     routes.get(PERSISTENCY_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,        routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,        routes.get(PATRONES_KEY)!);
    this.relatedSections.set(NUBE_KEY,            routes.get(NUBE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      MICRO_SERVICES_KEY, routes.get(MICRO_SERVICES_KEY)!,
      ''                , ''
    );
  }

}

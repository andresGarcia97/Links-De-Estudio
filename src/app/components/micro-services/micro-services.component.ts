import { Component, OnInit } from '@angular/core';
import { ARQUITECTURAS_KEY, LinkReferencia, MICRO_SERVICES_REF, PATRONES_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-micro-services',
  templateUrl: './micro-services.component.html'
})
export class MicroServicesComponent implements OnInit {

  items = [];

  components = MICRO_SERVICES_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...MICRO_SERVICES_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ARQUITECTURAS_KEY, routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,      routes.get(PATRONES_KEY)!);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  META_CARACTERISTICAS_KEY, COMPILACION_REF, META_ESTRUCTURAS_KEY, HARDWARE_KEY, LinkReferencia,
  FRAMEWORKS_KEY, PARADIGMAS_KEY, EJECUCION_KEY}
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { COMPILACION_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-compilacion',
    templateUrl: './compilacion.component.html',
    standalone: false
})
export class CompilacionComponent implements OnInit {

  items: Item[] = [];

  components = COMPILACION_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...COMPILACION_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[COMPILACION_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(META_CARACTERISTICAS_KEY, routes.get(META_CARACTERISTICAS_KEY)!);
    this.relatedSections.set(META_ESTRUCTURAS_KEY,     routes.get(META_ESTRUCTURAS_KEY)!);
    this.relatedSections.set(PARADIGMAS_KEY,           routes.get(PARADIGMAS_KEY)!);
    this.relatedSections.set(EJECUCION_KEY,            routes.get(EJECUCION_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,             routes.get(HARDWARE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      FRAMEWORKS_KEY, routes.get(FRAMEWORKS_KEY)!,
      EJECUCION_KEY,  routes.get(EJECUCION_KEY)!
    );
  }

}

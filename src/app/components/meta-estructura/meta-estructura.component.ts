import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { META_CARACTERISTICAS_KEY, COMPILACION_KEY, LinkReferencia, META_ESTRUCTURAS_REF, PATRONES_KEY, REFACTORING_KEY,
  CALIDAD_KEY, HARDWARE_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { ESTRUCTURAS_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-meta-estructura',
    templateUrl: './meta-estructura.component.html',
    standalone: false
})
export class MetaEstructuraComponent implements OnInit {

  items: Item[] = [];

  components = META_ESTRUCTURAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...META_ESTRUCTURAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[ESTRUCTURAS_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(META_CARACTERISTICAS_KEY, routes.get(META_CARACTERISTICAS_KEY)!);
    this.relatedSections.set(REFACTORING_KEY,          routes.get(REFACTORING_KEY)!);
    this.relatedSections.set(COMPILACION_KEY,          routes.get(COMPILACION_KEY)!);
    this.relatedSections.set(PATRONES_KEY,             routes.get(PATRONES_KEY)!);
    this.relatedSections.set(CALIDAD_KEY,              routes.get(CALIDAD_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      META_CARACTERISTICAS_KEY, routes.get(META_CARACTERISTICAS_KEY)!,
      HARDWARE_KEY,             routes.get(HARDWARE_KEY)!
    );
  }

}

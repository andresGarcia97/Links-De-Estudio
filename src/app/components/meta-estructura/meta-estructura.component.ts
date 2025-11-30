import { Component, OnInit } from '@angular/core';
import { META_ESTRUCTURAS } from 'src/app/models/content/content5';
import { META_CARACTERISTICAS_KEY, COMPILACION_KEY, LinkReferencia, META_ESTRUCTURAS_REF, PATRONES_KEY, REFACTORING_KEY,
  CALIDAD_KEY, HARDWARE_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-meta-estructura',
    templateUrl: './meta-estructura.component.html',
    standalone: false
})
export class MetaEstructuraComponent implements OnInit {

  items = META_ESTRUCTURAS;

  components = META_ESTRUCTURAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...META_ESTRUCTURAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
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

import { Component, OnInit } from '@angular/core';
import { META_ESTRUCTURAS } from 'src/app/models/content/content5';
import { META_CARACTERISTICAS_KEY, COMPILACION_KEY, LinkReferencia, META_ESTRUCTURAS_REF, PATRONES_KEY, REFACTORING_KEY, CALIDAD_KEY }
from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-meta-estructura',
  templateUrl: './meta-estructura.component.html'
})
export class MetaEstructuraComponent implements OnInit {

  items = META_ESTRUCTURAS;

  components = META_ESTRUCTURAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...META_ESTRUCTURAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(META_CARACTERISTICAS_KEY, routes.get(META_CARACTERISTICAS_KEY)!);
    this.relatedSections.set(REFACTORING_KEY,          routes.get(REFACTORING_KEY)!);
    this.relatedSections.set(COMPILACION_KEY,          routes.get(COMPILACION_KEY)!);
    this.relatedSections.set(PATRONES_KEY,             routes.get(PATRONES_KEY)!);
    this.relatedSections.set(CALIDAD_KEY,              routes.get(CALIDAD_KEY)!);
  }

}

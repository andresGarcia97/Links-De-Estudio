import { Component, OnInit } from '@angular/core';
import { META_ESTRUCTURAS } from 'src/app/models/content/content1';
import { CARACTERISTICAS_KEY, LinkReferencia, META_ESTRUCTURAS_REF, PATRONES_KEY } from 'src/app/models/linkReferencia';

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
    this.relatedSections.set(CARACTERISTICAS_KEY, routes.get(CARACTERISTICAS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,        routes.get(PATRONES_KEY)!);
  }

}

import { Component, OnInit } from '@angular/core';
import { PARADIGMAS } from 'src/app/models/content/content1';
import { ANALISIS_KEY, META_CARACTERISTICAS_KEY, LinkReferencia, PARADIGMAS_REF, PATRONES_KEY, PRINCIPIOS_KEY } 
from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-paradigmas',
  templateUrl: './paradigmas.component.html'
})
export class ParadigmasComponent  implements OnInit {

  items = PARADIGMAS;

  components = PARADIGMAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PARADIGMAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(META_CARACTERISTICAS_KEY, routes.get(META_CARACTERISTICAS_KEY)!);
    this.relatedSections.set(PRINCIPIOS_KEY,           routes.get(PRINCIPIOS_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,             routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,             routes.get(PATRONES_KEY)!);
  }

}

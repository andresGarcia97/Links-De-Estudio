import { Component, OnInit } from '@angular/core';
import { PATRONES } from 'src/app/models/content/content5';
import { ANALISIS_KEY, FRAMEWORKS_KEY, LinkReferencia, NUBE_KEY, PARADIGMAS_KEY, PATRONES_KEY, PATRONES_REF, PRINCIPIOS_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-patrones',
  templateUrl: './patrones.component.html'
})
export class PatronesComponent implements OnInit {

  items = PATRONES;

  components = PATRONES_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PATRONES_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(PRINCIPIOS_KEY, routes.get(PRINCIPIOS_KEY)!);
    this.relatedSections.set(FRAMEWORKS_KEY, routes.get(FRAMEWORKS_KEY)!);
    this.relatedSections.set(PARADIGMAS_KEY, routes.get(PATRONES_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,   routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(NUBE_KEY,       routes.get(NUBE_KEY)!);
  }

}

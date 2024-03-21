import { Component, OnInit } from '@angular/core';
import { CALIDAD } from 'src/app/models/content/content1';
import { AGILES_KEY, ANALISIS_KEY, BUENAS_PRACTICAS_KEY, CALIDAD_REF, LinkReferencia, MALAS_PRACTICAS_KEY, PATRONES_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.component.html'
})
export class CalidadComponent implements OnInit {

  items = CALIDAD;

  components = CALIDAD_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...CALIDAD_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(BUENAS_PRACTICAS_KEY, routes.get(BUENAS_PRACTICAS_KEY)!);
    this.relatedSections.set(MALAS_PRACTICAS_KEY,  routes.get(MALAS_PRACTICAS_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,         routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,         routes.get(PATRONES_KEY)!);
    this.relatedSections.set(AGILES_KEY,           routes.get(AGILES_KEY)!);
  }

}

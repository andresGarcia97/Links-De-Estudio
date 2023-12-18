import { Component, OnInit } from '@angular/core';
import { BUENAS_PRACTICAS } from 'src/app/models/content/content2';
import { ANALISIS_KEY, BUENAS_PRACTICAS_REF, CALIDAD_KEY, LinkReferencia, MALAS_PRACTICAS_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-buenas-practicas',
  templateUrl: './buenas-practicas.component.html'
})
export class BuenasPracticasComponent implements OnInit {

  items = BUENAS_PRACTICAS;

  components = BUENAS_PRACTICAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...BUENAS_PRACTICAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CALIDAD_KEY,         routes.get(CALIDAD_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,        routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(MALAS_PRACTICAS_KEY, routes.get(MALAS_PRACTICAS_KEY)!);
  }

}

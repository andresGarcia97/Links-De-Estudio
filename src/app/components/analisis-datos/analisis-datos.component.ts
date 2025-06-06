import { Component, OnInit } from '@angular/core';
import { ANALISIS_DATA } from 'src/app/models/content/content1';
import { 
  META_CARACTERISTICAS_KEY, LinkReferencia, ANALISIS_DATA_REF, ANALISIS_KEY, CD_CI_KEY, CONOCIMIENTO_EMPIRICO_KEY,
  PERSISTENCY_KEY, PATRONES_KEY
} from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-analisis-datos',
  templateUrl: './analisis-datos.component.html'
})
export class AnalisisDatosComponent implements OnInit {

  items = ANALISIS_DATA;

  components = ANALISIS_DATA_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...ANALISIS_DATA_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONOCIMIENTO_EMPIRICO_KEY, routes.get(CONOCIMIENTO_EMPIRICO_KEY)!);
    this.relatedSections.set(META_CARACTERISTICAS_KEY,  routes.get(META_CARACTERISTICAS_KEY)!);
    this.relatedSections.set(PERSISTENCY_KEY,           routes.get(PERSISTENCY_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,              routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,              routes.get(PATRONES_KEY)!);
    this.relatedSections.set(CD_CI_KEY,                 routes.get(CD_CI_KEY)!);
  }

}

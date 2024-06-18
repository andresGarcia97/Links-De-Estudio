import { Component, OnInit } from '@angular/core';
import { ARQUITECTURAS } from 'src/app/models/content/content4';
import { ANALISIS_KEY, ARQUITECTURAS_REF, LinkReferencia, METODOLOGIAS_KEY, NUBE_KEY, PATRONES_KEY, UML_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-arquitecturas',
  templateUrl: './arquitecturas.component.html'
})
export class ArquitecturasComponent implements OnInit {

  items = ARQUITECTURAS;

  components = ARQUITECTURAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...ARQUITECTURAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(METODOLOGIAS_KEY, routes.get(METODOLOGIAS_KEY)!);
    this.relatedSections.set(PATRONES_KEY    , routes.get(PATRONES_KEY)!);
    this.relatedSections.set(ANALISIS_KEY    , routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(NUBE_KEY        , routes.get(NUBE_KEY)!);
    this.relatedSections.set(UML_KEY         , routes.get(UML_KEY)!);
  }

}

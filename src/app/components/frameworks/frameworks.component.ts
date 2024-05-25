import { Component, OnInit } from '@angular/core';
import { FRAMEWORKS } from 'src/app/models/content/content4';
import { ANALISIS_KEY, ARQUITECTURAS_KEY, CALIDAD_KEY, FRAMEWORKS_REF, LinkReferencia, PRINCIPIOS_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html'
})
export class FrameworksComponent implements OnInit {

  items = FRAMEWORKS;

  components = FRAMEWORKS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...FRAMEWORKS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ARQUITECTURAS_KEY, routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(PRINCIPIOS_KEY,    routes.get(PRINCIPIOS_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,      routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(CALIDAD_KEY,       routes.get(CALIDAD_KEY)!);
  }
  
}

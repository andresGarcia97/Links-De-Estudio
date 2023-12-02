import { Component, OnInit } from '@angular/core';
import { FRAMEWORKS } from 'src/app/models/content/content1';
import { ANALISIS_KEY, CALIDAD_KEY, FRAMEWORKS_REF, LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html'
})
export class FrameworksComponent implements OnInit {

  items = FRAMEWORKS;

  components = new Map([ ...FRAMEWORKS_REF ]);

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map<string, string>([
    ['frameworks', '¿ Que son ?'],
    ['ioc', 'Inversión de control'],
    ['iod', 'Inyección de dependencias'],
    ['scafolding', 'Scaffolding'],
    ['iodSpring', 'IoD Spring'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CALIDAD_KEY , routes.get(CALIDAD_KEY)!);
    this.relatedSections.set(ANALISIS_KEY, routes.get(ANALISIS_KEY)!);
  }
  
}

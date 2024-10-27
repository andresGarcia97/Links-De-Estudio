import { Component, OnInit } from '@angular/core';
import { BASE_DE_DATOS_AVANZADO } from 'src/app/models/content/content1';
import { PERSISTENCY_KEY, LinkReferencia, PERSISTENCY_ADVANCED_REF, WEB_KEY, HARDWARE_KEY, PATRONES_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-sql-nosql-advanced',
  templateUrl: './sql-nosql-advanced.component.html'
})
export class SqlNosqlAdvancedComponent implements OnInit {

  items = BASE_DE_DATOS_AVANZADO;

  components = PERSISTENCY_ADVANCED_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PERSISTENCY_ADVANCED_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(PERSISTENCY_KEY, routes.get(PERSISTENCY_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,    routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(PATRONES_KEY,    routes.get(PATRONES_KEY)!);
    this.relatedSections.set(WEB_KEY,         routes.get(WEB_KEY)!);
  }
  
}

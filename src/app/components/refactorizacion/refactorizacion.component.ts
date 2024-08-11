import { Component, OnInit } from '@angular/core';
import { REFACTORIZACION } from 'src/app/models/content/content3';
import { BUENAS_PRACTICAS_KEY, CALIDAD_KEY, LinkReferencia, PATRONES_KEY, REFACTORING_REF, SMELL_CODES_KEY, TESTING_KEY }
from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-refactorizacion',
  templateUrl: './refactorizacion.component.html'
})
export class RefactorizacionComponent implements OnInit {

  items = REFACTORIZACION;

  components = REFACTORING_REF;
  
  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...REFACTORING_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(BUENAS_PRACTICAS_KEY, routes.get(BUENAS_PRACTICAS_KEY)!);
    this.relatedSections.set(SMELL_CODES_KEY,      routes.get(SMELL_CODES_KEY)!);
    this.relatedSections.set(PATRONES_KEY,         routes.get(PATRONES_KEY)!);
    this.relatedSections.set(TESTING_KEY,          routes.get(TESTING_KEY)!);
    this.relatedSections.set(CALIDAD_KEY,          routes.get(CALIDAD_KEY)!);
  }

}

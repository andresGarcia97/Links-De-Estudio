import { Component, OnInit } from '@angular/core';
import { REFACTORIZACION } from 'src/app/models/content/content3';
import { BUENAS_PRACTICAS_KEY, CALIDAD_KEY, ESTRATEGIAS_DESARROLLO_KEY, LinkReferencia, PATRONES_KEY, REFACTORING_REF,
  SMELL_CODES_KEY, TESTING_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-refactorizacion',
    templateUrl: './refactorizacion.component.html',
    standalone: false
})
export class RefactorizacionComponent implements OnInit {

  items = REFACTORIZACION;

  components = REFACTORING_REF;
  
  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...REFACTORING_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(BUENAS_PRACTICAS_KEY, routes.get(BUENAS_PRACTICAS_KEY)!);
    this.relatedSections.set(SMELL_CODES_KEY,      routes.get(SMELL_CODES_KEY)!);
    this.relatedSections.set(PATRONES_KEY,         routes.get(PATRONES_KEY)!);
    this.relatedSections.set(TESTING_KEY,          routes.get(TESTING_KEY)!);
    this.relatedSections.set(CALIDAD_KEY,          routes.get(CALIDAD_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      ESTRATEGIAS_DESARROLLO_KEY, routes.get(ESTRATEGIAS_DESARROLLO_KEY)!,
      SMELL_CODES_KEY,            routes.get(SMELL_CODES_KEY)!
    );
  }

}

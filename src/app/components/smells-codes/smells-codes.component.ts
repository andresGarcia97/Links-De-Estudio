import { Component, OnInit } from '@angular/core';
import { SMELLS_CODES } from 'src/app/models/content/content3';
import { ANALISIS_KEY, ARQUITECTURAS_KEY, BUENAS_PRACTICAS_KEY, LinkReferencia, MALAS_PRACTICAS_KEY, REFACTORING_KEY, SMELL_CODES_REF }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-smells-codes',
    templateUrl: './smells-codes.component.html',
    standalone: false
})
export class SmellsCodesComponent implements OnInit {

  items = SMELLS_CODES;
  
  components = SMELL_CODES_REF;

  itemStart = '';
  
  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...SMELL_CODES_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(BUENAS_PRACTICAS_KEY, routes.get(BUENAS_PRACTICAS_KEY)!);
    this.relatedSections.set(MALAS_PRACTICAS_KEY,  routes.get(MALAS_PRACTICAS_KEY)!);
    this.relatedSections.set(ARQUITECTURAS_KEY,    routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(REFACTORING_KEY,      routes.get(REFACTORING_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,         routes.get(ANALISIS_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      REFACTORING_KEY,      routes.get(REFACTORING_KEY)!,
      BUENAS_PRACTICAS_KEY, routes.get(BUENAS_PRACTICAS_KEY)!
    );
  }

}

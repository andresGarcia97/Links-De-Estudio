import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ANALISIS_KEY, ARQUITECTURAS_KEY, BUENAS_PRACTICAS_KEY, LinkReferencia, MALAS_PRACTICAS_KEY, REFACTORING_KEY, SMELL_CODES_REF }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { SMELL_CODES_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-smells-codes',
    templateUrl: './smells-codes.component.html',
    standalone: false
})
export class SmellsCodesComponent implements OnInit {

  items: Item[] = [];
  
  components = SMELL_CODES_REF;

  itemStart = '';
  
  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...SMELL_CODES_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[SMELL_CODES_PATH.propertyNameData];
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

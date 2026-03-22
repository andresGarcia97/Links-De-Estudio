import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ANALISIS_KEY, BUENAS_PRACTICAS_REF, CALIDAD_KEY, ESTRATEGIAS_DESARROLLO_KEY, LinkReferencia, MALAS_PRACTICAS_KEY,
  PRINCIPIOS_KEY, SMELL_CODES_KEY
}
  from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { BUENAS_PRACTICAS_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-buenas-practicas',
    templateUrl: './buenas-practicas.component.html',
    standalone: false
})
export class BuenasPracticasComponent implements OnInit {

  items: Item[] = [];

  components = BUENAS_PRACTICAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...BUENAS_PRACTICAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[BUENAS_PRACTICAS_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ESTRATEGIAS_DESARROLLO_KEY, routes.get(ESTRATEGIAS_DESARROLLO_KEY)!);
    this.relatedSections.set(MALAS_PRACTICAS_KEY,        routes.get(MALAS_PRACTICAS_KEY)!);
    this.relatedSections.set(PRINCIPIOS_KEY,             routes.get(PRINCIPIOS_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,               routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(CALIDAD_KEY,                routes.get(CALIDAD_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      SMELL_CODES_KEY,     routes.get(SMELL_CODES_KEY)!,
      MALAS_PRACTICAS_KEY, routes.get(MALAS_PRACTICAS_KEY)!
    );
  }

}

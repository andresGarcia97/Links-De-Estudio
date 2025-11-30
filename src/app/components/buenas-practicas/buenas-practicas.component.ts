import { Component, OnInit } from '@angular/core';
import { BUENAS_PRACTICAS } from 'src/app/models/content/content6';
import { ANALISIS_KEY, BUENAS_PRACTICAS_REF, CALIDAD_KEY, LinkReferencia, MALAS_PRACTICAS_KEY, PRINCIPIOS_KEY, SMELL_CODES_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-buenas-practicas',
    templateUrl: './buenas-practicas.component.html',
    standalone: false
})
export class BuenasPracticasComponent implements OnInit {

  items = BUENAS_PRACTICAS;

  components = BUENAS_PRACTICAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...BUENAS_PRACTICAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(MALAS_PRACTICAS_KEY, routes.get(MALAS_PRACTICAS_KEY)!);
    this.relatedSections.set(PRINCIPIOS_KEY,      routes.get(PRINCIPIOS_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,        routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(CALIDAD_KEY,         routes.get(CALIDAD_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      SMELL_CODES_KEY,     routes.get(SMELL_CODES_KEY)!,
      MALAS_PRACTICAS_KEY, routes.get(MALAS_PRACTICAS_KEY)!
    );
  }

}

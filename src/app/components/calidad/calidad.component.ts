import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { 
  AGILES_KEY, ANALISIS_KEY, BUENAS_PRACTICAS_KEY, CALIDAD_REF, LinkReferencia, MALAS_PRACTICAS_KEY, METODOLOGIAS_KEY, PATRONES_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { CALIDAD_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-calidad',
    templateUrl: './calidad.component.html',
    standalone: false
})
export class CalidadComponent implements OnInit {

  items: Item[] = [];

  components = CALIDAD_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...CALIDAD_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));
  
  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[CALIDAD_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(BUENAS_PRACTICAS_KEY, routes.get(BUENAS_PRACTICAS_KEY)!);
    this.relatedSections.set(MALAS_PRACTICAS_KEY,  routes.get(MALAS_PRACTICAS_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,         routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,         routes.get(PATRONES_KEY)!);
    this.relatedSections.set(AGILES_KEY,           routes.get(AGILES_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      MALAS_PRACTICAS_KEY, routes.get(MALAS_PRACTICAS_KEY)!,
      METODOLOGIAS_KEY,    routes.get(METODOLOGIAS_KEY)!
    );
  }

}

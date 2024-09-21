import { Component, OnInit } from '@angular/core';
import { ANALISIS } from 'src/app/models/content/content2';
import { ANALISIS_REF, LinkReferencia, PEOPLE_KEY, LEYES_KEY, ANALISIS_DATA_KEY, UML_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html'
})
export class AnalisisComponent implements OnInit {

  items = ANALISIS;

  components = ANALISIS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...ANALISIS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ANALISIS_DATA_KEY, routes.get(ANALISIS_DATA_KEY)!);
    this.relatedSections.set(PEOPLE_KEY,        routes.get(PEOPLE_KEY)!);
    this.relatedSections.set(LEYES_KEY,         routes.get(LEYES_KEY)!);
    this.relatedSections.set(UML_KEY,           routes.get(UML_KEY)!);
  }

}

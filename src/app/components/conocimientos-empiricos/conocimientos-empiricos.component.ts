import { Component, OnInit } from '@angular/core';
import { CONOCIMIENTOS_EMPIRICOS } from 'src/app/models/content/content5';
import { ANALISIS_KEY, CONOCIMIENTO_EMPIRICO, LEYES_KEY, LinkReferencia, PEOPLE_KEY, PRINCIPIOS_KEY, WEB_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-conocimientos-empiricos',
  templateUrl: './conocimientos-empiricos.component.html'
})
export class ConocimientosEmpiricosComponent implements OnInit {

  items = CONOCIMIENTOS_EMPIRICOS;

  components = CONOCIMIENTO_EMPIRICO;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...CONOCIMIENTO_EMPIRICO ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(PRINCIPIOS_KEY, routes.get(PRINCIPIOS_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,   routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PEOPLE_KEY,     routes.get(PEOPLE_KEY)!);
    this.relatedSections.set(LEYES_KEY,      routes.get(LEYES_KEY)!);
    this.relatedSections.set(WEB_KEY,        routes.get(WEB_KEY)!);
  }

}

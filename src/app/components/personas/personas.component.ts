import { Component, OnInit } from '@angular/core';
import { PEOPLE } from 'src/app/models/content/content6';
import {
  CONOCIMIENTO_EMPIRICO_KEY, ESTRATEGIAS_DESARROLLO_KEY, LEYES_KEY, LinkReferencia, METODOLOGIAS_KEY, PEOPLE_REF, USER_HISTORIES_KEY
} from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html'
})
export class PersonasComponent implements OnInit {

  items = PEOPLE;

  components = PEOPLE_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PEOPLE_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ESTRATEGIAS_DESARROLLO_KEY, routes.get(ESTRATEGIAS_DESARROLLO_KEY)!);
    this.relatedSections.set(CONOCIMIENTO_EMPIRICO_KEY,  routes.get(CONOCIMIENTO_EMPIRICO_KEY)!);
    this.relatedSections.set(USER_HISTORIES_KEY,         routes.get(USER_HISTORIES_KEY)!);
    this.relatedSections.set(METODOLOGIAS_KEY,           routes.get(METODOLOGIAS_KEY)!);
    this.relatedSections.set(LEYES_KEY,                  routes.get(LEYES_KEY)!);
  }

}

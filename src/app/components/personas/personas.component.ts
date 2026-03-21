import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CONOCIMIENTO_EMPIRICO_KEY, ESTRATEGIAS_DESARROLLO_KEY, LEYES_KEY, LinkReferencia, METODOLOGIAS_KEY, PEOPLE_REF,
  REQUISITOS_KEY, USER_HISTORIES_KEY
} from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { PEOPLE_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    standalone: false
})
export class PersonasComponent implements OnInit {

  items: Item[] = [];

  components = PEOPLE_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PEOPLE_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[PEOPLE_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ESTRATEGIAS_DESARROLLO_KEY, routes.get(ESTRATEGIAS_DESARROLLO_KEY)!);
    this.relatedSections.set(CONOCIMIENTO_EMPIRICO_KEY,  routes.get(CONOCIMIENTO_EMPIRICO_KEY)!);
    this.relatedSections.set(USER_HISTORIES_KEY,         routes.get(USER_HISTORIES_KEY)!);
    this.relatedSections.set(METODOLOGIAS_KEY,           routes.get(METODOLOGIAS_KEY)!);
    this.relatedSections.set(LEYES_KEY,                  routes.get(LEYES_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      USER_HISTORIES_KEY, routes.get(USER_HISTORIES_KEY)!,
      REQUISITOS_KEY,     routes.get(REQUISITOS_KEY)!
    );
  }

}

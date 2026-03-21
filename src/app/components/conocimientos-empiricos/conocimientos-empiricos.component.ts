import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ANALISIS_KEY, CONOCIMIENTO_EMPIRICO, LEYES_KEY, LinkReferencia, PEOPLE_KEY, PRINCIPIOS_KEY, WEB_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { EMPIRICO_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-conocimientos-empiricos',
    templateUrl: './conocimientos-empiricos.component.html',
    standalone: false
})
export class ConocimientosEmpiricosComponent implements OnInit {

  items: Item[] = [];

  components = CONOCIMIENTO_EMPIRICO;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...CONOCIMIENTO_EMPIRICO ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[EMPIRICO_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(PRINCIPIOS_KEY, routes.get(PRINCIPIOS_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,   routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PEOPLE_KEY,     routes.get(PEOPLE_KEY)!);
    this.relatedSections.set(LEYES_KEY,      routes.get(LEYES_KEY)!);
    this.relatedSections.set(WEB_KEY,        routes.get(WEB_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      WEB_KEY,   routes.get(WEB_KEY)!,
      LEYES_KEY, routes.get(LEYES_KEY)!
    );
  }

}

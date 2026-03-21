import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AGILES_REF, LinkReferencia, METODOLOGIAS_KEY, USER_HISTORIES_KEY, LEYES_KEY, REQUISITOS_KEY, ANALISIS_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { AGILES_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-agiles',
    templateUrl: './agiles.component.html',
    standalone: false
})
export class AgilesComponent implements OnInit {

  items: Item[] = [];

  components = AGILES_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...AGILES_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[AGILES_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(USER_HISTORIES_KEY, routes.get(USER_HISTORIES_KEY)!);
    this.relatedSections.set(METODOLOGIAS_KEY,   routes.get(METODOLOGIAS_KEY)!);
    this.relatedSections.set(REQUISITOS_KEY,     routes.get(REQUISITOS_KEY)!);
    this.relatedSections.set(LEYES_KEY,          routes.get(LEYES_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      METODOLOGIAS_KEY, routes.get(METODOLOGIAS_KEY)!,
      ANALISIS_KEY,     routes.get(ANALISIS_KEY)!
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AGILES_KEY, ANALISIS_KEY, LinkReferencia, PEOPLE_KEY, REQUISITOS_REF, UML_KEY, USER_HISTORIES_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { REQUISITOS_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-requisitos',
    templateUrl: './requisitos.component.html',
    standalone: false
})
export class RequisitosComponent implements OnInit {

  items: Item[] = [];

  components = REQUISITOS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...REQUISITOS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[REQUISITOS_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(USER_HISTORIES_KEY, routes.get(USER_HISTORIES_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,       routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PEOPLE_KEY,         routes.get(PEOPLE_KEY)!);
    this.relatedSections.set(AGILES_KEY,         routes.get(AGILES_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      PEOPLE_KEY, routes.get(PEOPLE_KEY)!,
      UML_KEY,    routes.get(UML_KEY)!
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { REQUISITOS } from 'src/app/models/content/content3';
import { AGILES_KEY, ANALISIS_KEY, LinkReferencia, PERSONAS_KEY, REQUISITOS_REF, USER_HISTORIES_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html'
})
export class RequisitosComponent implements OnInit {

  items = REQUISITOS;

  components = REQUISITOS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...REQUISITOS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(USER_HISTORIES_KEY, routes.get(USER_HISTORIES_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,       routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PERSONAS_KEY,       routes.get(PERSONAS_KEY)!);
    this.relatedSections.set(AGILES_KEY,         routes.get(AGILES_KEY)!);
  }

}

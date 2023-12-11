import { Component, OnInit } from '@angular/core';
import { AGILES } from 'src/app/models/content/content1';
import { AGILES_REF, LinkReferencia, METODOLOGIAS_KEY, USER_HISTORIES_KEY, LEYES_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-agiles',
  templateUrl: './agiles.component.html'
})
export class AgilesComponent implements OnInit {

  items = AGILES;

  components = AGILES_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...AGILES_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(METODOLOGIAS_KEY,   routes.get(METODOLOGIAS_KEY)!);
    this.relatedSections.set(USER_HISTORIES_KEY, routes.get(USER_HISTORIES_KEY)!);
    this.relatedSections.set(LEYES_KEY,          routes.get(LEYES_KEY)!);
  }

}

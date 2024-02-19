import { Component, OnInit } from '@angular/core';
import { OTROS } from 'src/app/models/content/content1';
import { CARACTERISTICAS_KEY, LinkReferencia, OTROS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html'
})
export class OtrosComponent implements OnInit {

  items = OTROS;

  components = OTROS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...OTROS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CARACTERISTICAS_KEY, routes.get(CARACTERISTICAS_KEY)!);
  }

}

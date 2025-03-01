import { Component, OnInit } from '@angular/core';
import { LEYES } from 'src/app/models/content/content6';
import { AGILES_KEY, CONOCIMIENTO_EMPIRICO_KEY, HARDWARE_KEY, LEYES_REF, LinkReferencia, PEOPLE_KEY }
from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-leyes',
  templateUrl: './leyes.component.html'
})
export class LeyesComponent implements OnInit {

  items = LEYES;

  components = LEYES_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...LEYES_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONOCIMIENTO_EMPIRICO_KEY, routes.get(CONOCIMIENTO_EMPIRICO_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,              routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(PEOPLE_KEY,                routes.get(PEOPLE_KEY)!);
    this.relatedSections.set(AGILES_KEY,                routes.get(AGILES_KEY)!);
  }

}

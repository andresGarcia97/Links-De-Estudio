import { Component, OnInit } from '@angular/core';
import { LEYES } from 'src/app/models/content/content2';
import { CONOCIMIENTO_EMPIRICO_KEY, LEYES_REF, LinkReferencia, PERSONAS_KEY } from 'src/app/models/linkReferencia';

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
    this.relatedSections.set(PERSONAS_KEY,               routes.get(PERSONAS_KEY)!);
    this.relatedSections.set(CONOCIMIENTO_EMPIRICO_KEY,  routes.get(CONOCIMIENTO_EMPIRICO_KEY)!);
  }

}

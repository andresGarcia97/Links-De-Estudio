import { Component, OnInit } from '@angular/core';
import { NEURO_MARKETING } from 'src/app/models/content/content6';
import { CONOCIMIENTO_EMPIRICO_KEY, LinkReferencia, NEURO_MARKETING_REF, PEOPLE_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-neuro-marketing',
  templateUrl: './neuro-marketing.component.html'
})
export class NeuroMarketingComponent implements OnInit {

  items = NEURO_MARKETING;
  
  components = NEURO_MARKETING_REF;
  
  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...NEURO_MARKETING_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONOCIMIENTO_EMPIRICO_KEY, routes.get(CONOCIMIENTO_EMPIRICO_KEY)!);
    this.relatedSections.set(PEOPLE_KEY,                routes.get(PEOPLE_KEY)!);
  }

}

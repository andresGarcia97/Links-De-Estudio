import { Component, OnInit } from '@angular/core';
import { NEURO_MARKETING } from 'src/app/models/content/content3';
import { CONOCIMIENTO_EMPIRICO_KEY, LinkReferencia, NEURO_MARKETING_REF, PERSONAS_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-neuro-marketing',
  templateUrl: './neuro-marketing.component.html'
})
export class NeuroMarketingComponent  implements OnInit {

  items = NEURO_MARKETING;
  
  components = NEURO_MARKETING_REF;
  
  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...NEURO_MARKETING_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(PERSONAS_KEY,               routes.get(PERSONAS_KEY)!);
    this.relatedSections.set(CONOCIMIENTO_EMPIRICO_KEY,  routes.get(CONOCIMIENTO_EMPIRICO_KEY)!);
  }

}

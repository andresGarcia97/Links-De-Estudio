import { Component, OnInit } from '@angular/core';
import { NEURO_MARKETING } from 'src/app/models/content/content7';
import { ANALISIS_DATA_KEY, CONOCIMIENTO_EMPIRICO_KEY, LinkReferencia, MICRO_SERVICES_KEY, NEURO_MARKETING_REF, PEOPLE_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-neuro-marketing',
    templateUrl: './neuro-marketing.component.html',
    standalone: false
})
export class NeuroMarketingComponent implements OnInit {

  items = NEURO_MARKETING;
  
  components = NEURO_MARKETING_REF;
  
  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...NEURO_MARKETING_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONOCIMIENTO_EMPIRICO_KEY, routes.get(CONOCIMIENTO_EMPIRICO_KEY)!);
    this.relatedSections.set(PEOPLE_KEY,                routes.get(PEOPLE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      ANALISIS_DATA_KEY,  routes.get(ANALISIS_DATA_KEY)!,
      MICRO_SERVICES_KEY, routes.get(MICRO_SERVICES_KEY)!
    );
  }

}

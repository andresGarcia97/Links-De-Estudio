import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ANALISIS_DATA_KEY, CONOCIMIENTO_EMPIRICO_KEY, LinkReferencia, MICRO_SERVICES_KEY, NEURO_MARKETING_REF, PEOPLE_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { NEURO_MARKETING_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-neuro-marketing',
    templateUrl: './neuro-marketing.component.html',
    standalone: false
})
export class NeuroMarketingComponent implements OnInit {

  items: Item[] = [];
  
  components = NEURO_MARKETING_REF;
  
  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...NEURO_MARKETING_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[NEURO_MARKETING_PATH.propertyNameData];
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

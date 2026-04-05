import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HARDWARE_KEY, LinkReferencia, PATRONES_KEY, PERSISTENCY_ADVANCED_KEY, PERSISTENCY_INTERMEDIATE_REF, PERSISTENCY_KEY, WEB_KEY }
  from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { PERSISTENCY_INTERMEDIATE_PATH } from 'src/app/models/relationsSummary';

@Component({
  selector: 'app-sql-nosql-intermediate',
  templateUrl: './sql-nosql-intermediate.component.html',
  standalone: false
})
export class SqlNosqlIntermediateComponent implements OnInit {

  items: Item[] = [];

  components = PERSISTENCY_INTERMEDIATE_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PERSISTENCY_INTERMEDIATE_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[PERSISTENCY_INTERMEDIATE_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(PERSISTENCY_ADVANCED_KEY, routes.get(PERSISTENCY_ADVANCED_KEY)!);
    this.relatedSections.set(PERSISTENCY_KEY,          routes.get(PERSISTENCY_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,             routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(PATRONES_KEY,             routes.get(PATRONES_KEY)!);
    this.relatedSections.set(WEB_KEY,                  routes.get(WEB_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      PERSISTENCY_KEY,          routes.get(PERSISTENCY_KEY)!,
      PERSISTENCY_ADVANCED_KEY, routes.get(PERSISTENCY_ADVANCED_KEY)!
    );
  }
  
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PERSISTENCY_KEY, LinkReferencia, PERSISTENCY_ADVANCED_REF, WEB_KEY, HARDWARE_KEY, PATRONES_KEY, FRAMEWORKS_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { PERSISTENCY_ADVANCED_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-sql-nosql-advanced',
    templateUrl: './sql-nosql-advanced.component.html',
    standalone: false
})
export class SqlNosqlAdvancedComponent implements OnInit {

  items: Item[] = [];

  components = PERSISTENCY_ADVANCED_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PERSISTENCY_ADVANCED_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[PERSISTENCY_ADVANCED_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(PERSISTENCY_KEY, routes.get(PERSISTENCY_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,    routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(PATRONES_KEY,    routes.get(PATRONES_KEY)!);
    this.relatedSections.set(WEB_KEY,         routes.get(WEB_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      PERSISTENCY_KEY, routes.get(PERSISTENCY_KEY)!,
      FRAMEWORKS_KEY,  routes.get(FRAMEWORKS_KEY)!
    );
  }
  
}

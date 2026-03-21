import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PERSISTENCY_ADVANCED_KEY, HARDWARE_KEY, LinkReferencia, PATRONES_KEY, PERSISTENCY_REF, TESTING_ADVANCED_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { PERSISTENCY_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-sql-nosql',
    templateUrl: './sql-nosql.component.html',
    standalone: false
})
export class SqlNosqlComponent implements OnInit {

  items: Item[] = [];

  components = PERSISTENCY_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PERSISTENCY_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[PERSISTENCY_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(PERSISTENCY_ADVANCED_KEY, routes.get(PERSISTENCY_ADVANCED_KEY)!);
    this.relatedSections.set(PATRONES_KEY,             routes.get(PATRONES_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,             routes.get(HARDWARE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      TESTING_ADVANCED_KEY,     routes.get(TESTING_ADVANCED_KEY)!,
      PERSISTENCY_ADVANCED_KEY, routes.get(PERSISTENCY_ADVANCED_KEY)!
    );
  }

}

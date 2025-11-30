import { Component, OnInit } from '@angular/core';
import { BASES_DE_DATOS } from 'src/app/models/content/content1';
import { PERSISTENCY_ADVANCED_KEY, HARDWARE_KEY, LinkReferencia, PATRONES_KEY, PERSISTENCY_REF, TESTING_ADVANCED_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-sql-nosql',
    templateUrl: './sql-nosql.component.html',
    standalone: false
})
export class SqlNosqlComponent implements OnInit {

  items = BASES_DE_DATOS;

  components = PERSISTENCY_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PERSISTENCY_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
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

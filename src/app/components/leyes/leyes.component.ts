import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AGILES_KEY, CONOCIMIENTO_EMPIRICO_KEY, HARDWARE_KEY, LEYES_REF, LinkReferencia, PEOPLE_KEY, SECURITY_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { LEYES_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-leyes',
    templateUrl: './leyes.component.html',
    standalone: false
})
export class LeyesComponent implements OnInit {

  items: Item[] = [];

  components = LEYES_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...LEYES_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[LEYES_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONOCIMIENTO_EMPIRICO_KEY, routes.get(CONOCIMIENTO_EMPIRICO_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,              routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(PEOPLE_KEY,                routes.get(PEOPLE_KEY)!);
    this.relatedSections.set(AGILES_KEY,                routes.get(AGILES_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      CONOCIMIENTO_EMPIRICO_KEY, routes.get(CONOCIMIENTO_EMPIRICO_KEY)!,
      SECURITY_KEY,              routes.get(SECURITY_KEY)!
    );
  }

}

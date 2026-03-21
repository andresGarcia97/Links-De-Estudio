import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AGILES_KEY, CALIDAD_KEY, ESTRATEGIAS_DESARROLLO_KEY, LinkReferencia, METODOLOGIAS_REF } from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { METODOLOGIAS_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-metodologias',
    templateUrl: './metodologias.component.html',
    standalone: false
})
export class MetodologiasComponent implements OnInit {

  items: Item[] = [];

  components = METODOLOGIAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...METODOLOGIAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[METODOLOGIAS_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ESTRATEGIAS_DESARROLLO_KEY, routes.get(ESTRATEGIAS_DESARROLLO_KEY)!);
    this.relatedSections.set(AGILES_KEY,                 routes.get(AGILES_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      CALIDAD_KEY, routes.get(CALIDAD_KEY)!,
      AGILES_KEY,  routes.get(AGILES_KEY)!
    );
  }

}

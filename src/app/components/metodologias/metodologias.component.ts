import { Component, OnInit } from '@angular/core';
import { METODOLOGIAS } from 'src/app/models/content/content2';
import { AGILES_KEY, CALIDAD_KEY, ESTRATEGIAS_DESARROLLO_KEY, LinkReferencia, METODOLOGIAS_REF } from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-metodologias',
    templateUrl: './metodologias.component.html',
    standalone: false
})
export class MetodologiasComponent implements OnInit {

  items = METODOLOGIAS;

  components = METODOLOGIAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...METODOLOGIAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
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

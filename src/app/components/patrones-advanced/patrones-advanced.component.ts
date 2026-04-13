import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ANALISIS_KEY, ESTRATEGIAS_DESARROLLO_KEY, FRAMEWORKS_KEY, LinkReferencia, NUBE_KEY, PARADIGMAS_KEY,
  PATRONES_ADVANCED_REF, PATRONES_KEY, PRINCIPIOS_KEY }
  from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { PATRONES_ADVANCED_PATH } from 'src/app/models/relationsSummary';

@Component({
  selector: 'app-patrones-advanced',
  templateUrl: './patrones-advanced.component.html',
  standalone: false
})
export class PatronesAdvancedComponent implements OnInit {

  items: Item[] = [];

  components = PATRONES_ADVANCED_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...PATRONES_ADVANCED_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[PATRONES_ADVANCED_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(PRINCIPIOS_KEY, routes.get(PRINCIPIOS_KEY)!);
    this.relatedSections.set(FRAMEWORKS_KEY, routes.get(FRAMEWORKS_KEY)!);
    this.relatedSections.set(PARADIGMAS_KEY, routes.get(PARADIGMAS_KEY)!);
    this.relatedSections.set(PATRONES_KEY,   routes.get(PATRONES_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,   routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(NUBE_KEY,       routes.get(NUBE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      PATRONES_KEY,          routes.get(PATRONES_KEY)!,
      ESTRATEGIAS_DESARROLLO_KEY, routes.get(ESTRATEGIAS_DESARROLLO_KEY)!
    );
  }

}

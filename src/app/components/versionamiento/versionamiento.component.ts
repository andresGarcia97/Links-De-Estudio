import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ANALISIS_KEY, APIS_KEY, EJECUCION_KEY, GIT_KEY, LinkReferencia, UML_KEY, VERSIONAMIENTO_REF }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { VERSIONAMIENTO_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-versionamiento',
    templateUrl: './versionamiento.component.html',
    standalone: false
})
export class VersionamientoComponent implements OnInit {

  items: Item[] = [];

  components = VERSIONAMIENTO_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...VERSIONAMIENTO_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[VERSIONAMIENTO_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ANALISIS_KEY, routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(APIS_KEY,     routes.get(APIS_KEY)!);
    this.relatedSections.set(UML_KEY,      routes.get(UML_KEY)!);
    this.relatedSections.set(GIT_KEY,      routes.get(GIT_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      EJECUCION_KEY, routes.get(EJECUCION_KEY)!,
      GIT_KEY,       routes.get(GIT_KEY)!
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ANALISIS_KEY, GIT_KEY, LinkReferencia, REQUISITOS_KEY, TESTING_KEY, UML_REF, VERSIONAMIENTO_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { UML_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-uml',
    templateUrl: './uml.component.html',
    standalone: false
})
export class UmlComponent implements OnInit {

  items: Item[] = [];

  components = UML_REF;
  
  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...UML_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[UML_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(VERSIONAMIENTO_KEY, routes.get(VERSIONAMIENTO_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,       routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(GIT_KEY,            routes.get(GIT_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      REQUISITOS_KEY, routes.get(REQUISITOS_KEY)!,
      TESTING_KEY,    routes.get(TESTING_KEY)!
    );
  }

}

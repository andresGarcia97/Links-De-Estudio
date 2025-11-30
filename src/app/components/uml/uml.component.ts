import { Component, OnInit } from '@angular/core';
import { UML } from 'src/app/models/content/content7';
import { ANALISIS_KEY, GIT_KEY, LinkReferencia, REQUISITOS_KEY, TESTING_KEY, UML_REF, VERSIONAMIENTO_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-uml',
    templateUrl: './uml.component.html',
    standalone: false
})
export class UmlComponent implements OnInit {

  items = UML;

  components = UML_REF;
  
  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...UML_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
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

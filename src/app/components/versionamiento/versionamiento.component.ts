import { Component, OnInit } from '@angular/core';
import { VERSIONAMIENTO } from 'src/app/models/content/content3';
import { ANALISIS_KEY, APIS_KEY, COMPILACION_KEY, GIT_KEY, LinkReferencia, UML_KEY, VERSIONAMIENTO_REF }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-versionamiento',
    templateUrl: './versionamiento.component.html',
    standalone: false
})
export class VersionamientoComponent implements OnInit {

  items = VERSIONAMIENTO;

  components = VERSIONAMIENTO_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...VERSIONAMIENTO_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ANALISIS_KEY, routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(APIS_KEY,     routes.get(APIS_KEY)!);
    this.relatedSections.set(UML_KEY,      routes.get(UML_KEY)!);
    this.relatedSections.set(GIT_KEY,      routes.get(GIT_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      COMPILACION_KEY, routes.get(COMPILACION_KEY)!,
      GIT_KEY,         routes.get(GIT_KEY)!
    );
  }

}

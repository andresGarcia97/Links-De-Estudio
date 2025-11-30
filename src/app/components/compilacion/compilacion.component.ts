import { Component, OnInit } from '@angular/core';
import { COMPILACION } from 'src/app/models/content/content2';
import {
  META_CARACTERISTICAS_KEY, COMPILACION_REF, META_ESTRUCTURAS_KEY, HARDWARE_KEY, LinkReferencia, FRAMEWORKS_KEY, VERSIONAMIENTO_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-compilacion',
    templateUrl: './compilacion.component.html',
    standalone: false
})
export class CompilacionComponent implements OnInit {

  items = COMPILACION;

  components = COMPILACION_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...COMPILACION_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(META_CARACTERISTICAS_KEY, routes.get(META_CARACTERISTICAS_KEY)!);
    this.relatedSections.set(META_ESTRUCTURAS_KEY,     routes.get(META_ESTRUCTURAS_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,             routes.get(HARDWARE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      FRAMEWORKS_KEY,     routes.get(FRAMEWORKS_KEY)!,
      VERSIONAMIENTO_KEY, routes.get(VERSIONAMIENTO_KEY)!
    );
  }

}

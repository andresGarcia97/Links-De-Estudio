import { Component, OnInit } from '@angular/core';
import { META_CARACTERISTICAS } from 'src/app/models/content/content4';
import { CALIDAD_KEY, META_ESTRUCTURAS_KEY, HARDWARE_KEY, LinkReferencia, META_CARATERISTICAS_REF, POO_KEY,
  REFACTORING_KEY, COMPILACION_KEY, APIS_KEY}
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
  selector: 'app-meta-caracteristicas',
  templateUrl: './meta-caracteristicas.component.html'
})
export class MetaCaracteristicasComponent implements OnInit {

  items = META_CARACTERISTICAS;

  components = META_CARATERISTICAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...META_CARATERISTICAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(META_ESTRUCTURAS_KEY, routes.get(META_ESTRUCTURAS_KEY)!);
    this.relatedSections.set(REFACTORING_KEY,      routes.get(REFACTORING_KEY)!);
    this.relatedSections.set(COMPILACION_KEY,      routes.get(COMPILACION_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,         routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(CALIDAD_KEY,          routes.get(CALIDAD_KEY)!);
    this.relatedSections.set(POO_KEY,              routes.get(POO_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      APIS_KEY,             routes.get(APIS_KEY)!,
      META_ESTRUCTURAS_KEY, routes.get(META_ESTRUCTURAS_KEY)!
    );
  }

}

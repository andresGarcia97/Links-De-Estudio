import { Component, OnInit } from '@angular/core';
import { SYSTEM_DESIGN } from 'src/app/models/content/content2';
import { ANALISIS_REF, LinkReferencia, PERSISTENCY_ADVANCED_KEY, META_CARACTERISTICAS_KEY, ANALISIS_DATA_KEY,
  ARQUITECTURAS_KEY, PERSISTENCY_KEY, REQUISITOS_KEY, PEOPLE_KEY, LEYES_KEY, CI_CD_KEY, APIS_KEY, NUBE_KEY, UML_KEY,
  USER_HISTORIES_KEY, ANALISIS_KEY, SYSTEM_DESIGN_REF } from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-system-design',
    templateUrl: './system-design.component.html',
    standalone: false
})
export class SystemDesignComponent implements OnInit {

  items = SYSTEM_DESIGN;

  components = SYSTEM_DESIGN_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...SYSTEM_DESIGN_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(PERSISTENCY_ADVANCED_KEY, routes.get(PERSISTENCY_ADVANCED_KEY)!);
    this.relatedSections.set(META_CARACTERISTICAS_KEY, routes.get(META_CARACTERISTICAS_KEY)!);
    this.relatedSections.set(ANALISIS_DATA_KEY,        routes.get(ANALISIS_DATA_KEY)!);
    this.relatedSections.set(ARQUITECTURAS_KEY,        routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(PERSISTENCY_KEY,          routes.get(PERSISTENCY_KEY)!);
    this.relatedSections.set(REQUISITOS_KEY,           routes.get(REQUISITOS_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,             routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(PEOPLE_KEY,               routes.get(PEOPLE_KEY)!);
    this.relatedSections.set(LEYES_KEY,                routes.get(LEYES_KEY)!);
    this.relatedSections.set(CI_CD_KEY,                routes.get(CI_CD_KEY)!);
    this.relatedSections.set(APIS_KEY,                 routes.get(APIS_KEY)!);
    this.relatedSections.set(NUBE_KEY,                 routes.get(NUBE_KEY)!);
    this.relatedSections.set(UML_KEY,                  routes.get(UML_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      ANALISIS_KEY,       routes.get(ANALISIS_KEY)!,
      USER_HISTORIES_KEY, routes.get(USER_HISTORIES_KEY)!
    );
  }

}

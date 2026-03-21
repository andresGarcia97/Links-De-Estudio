import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ANALISIS_DATA_KEY, APIS_KEY, CI_CD_REF, CONTENEDORES_KEY, HARDWARE_KEY, LinkReferencia, MICRO_SERVICES_KEY, NUBE_KEY,
  VERSIONAMIENTO_KEY, WEB_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { CICD_INFRAESTRUCTURE_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-cd-ci',
    templateUrl: './cd-ci.component.html',
    standalone: false
})
export class CDCIComponent implements OnInit {

  items: Item[] = [];

  components = CI_CD_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...CI_CD_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[CICD_INFRAESTRUCTURE_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(VERSIONAMIENTO_KEY, routes.get(VERSIONAMIENTO_KEY)!);
    this.relatedSections.set(MICRO_SERVICES_KEY, routes.get(MICRO_SERVICES_KEY)!);
    this.relatedSections.set(CONTENEDORES_KEY,   routes.get(CONTENEDORES_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,       routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(NUBE_KEY,           routes.get(NUBE_KEY)!);
    this.relatedSections.set(APIS_KEY,           routes.get(APIS_KEY)!);
    this.relatedSections.set(WEB_KEY,            routes.get(WEB_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      HARDWARE_KEY,      routes.get(HARDWARE_KEY)!,
      ANALISIS_DATA_KEY, routes.get(ANALISIS_DATA_KEY)!
    );
  }

}

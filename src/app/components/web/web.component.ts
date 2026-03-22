import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BUENAS_PRACTICAS_KEY, CI_CD_KEY, CONOCIMIENTO_EMPIRICO_KEY, CONTENEDORES_KEY, FRAMEWORKS_KEY, LinkReferencia,
  NUBE_KEY, SECURITY_KEY, WEB_REF }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { WEB_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-web',
    templateUrl: './web.component.html',
    standalone: false
})
export class WebComponent implements OnInit {

  items: Item[] = [];

  components = WEB_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...WEB_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[WEB_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(BUENAS_PRACTICAS_KEY, routes.get(BUENAS_PRACTICAS_KEY)!);
    this.relatedSections.set(FRAMEWORKS_KEY,       routes.get(FRAMEWORKS_KEY)!);
    this.relatedSections.set(SECURITY_KEY,         routes.get(SECURITY_KEY)!);
    this.relatedSections.set(CI_CD_KEY,            routes.get(CI_CD_KEY)!);
    this.relatedSections.set(NUBE_KEY,             routes.get(NUBE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      CONTENEDORES_KEY,          routes.get(CONTENEDORES_KEY)!,
      CONOCIMIENTO_EMPIRICO_KEY, routes.get(CONOCIMIENTO_EMPIRICO_KEY)!
    );
  }

}

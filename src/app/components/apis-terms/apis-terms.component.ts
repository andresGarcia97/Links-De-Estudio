import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIS_REF, LinkReferencia, CONTENEDORES_KEY, SECURITY_KEY, CI_CD_KEY, WEB_KEY, NUBE_KEY, META_CARACTERISTICAS_KEY,
  OBSERVABILIDAD_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { APIS_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-apis-terms',
    templateUrl: './apis-terms.component.html',
    standalone: false
})
export class ApisTermsComponent implements OnInit {

  items: Item[] = [];

  components = APIS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...APIS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[APIS_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONTENEDORES_KEY, routes.get(CONTENEDORES_KEY)!);
    this.relatedSections.set(SECURITY_KEY,     routes.get(SECURITY_KEY)!);
    this.relatedSections.set(CI_CD_KEY,        routes.get(CI_CD_KEY)!);
    this.relatedSections.set(NUBE_KEY,         routes.get(NUBE_KEY)!);
    this.relatedSections.set(WEB_KEY,          routes.get(WEB_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      OBSERVABILIDAD_KEY,       routes.get(OBSERVABILIDAD_KEY)!,
      META_CARACTERISTICAS_KEY, routes.get(META_CARACTERISTICAS_KEY)!
    );
  }

}

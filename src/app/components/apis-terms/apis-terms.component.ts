import { Component, OnInit } from '@angular/core';
import { APIS } from 'src/app/models/content/content5';
import { APIS_REF, LinkReferencia, CONTENEDORES_KEY, SECURITY_KEY, CD_CI_KEY, WEB_KEY, NUBE_KEY, META_CARACTERISTICAS_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
  selector: 'app-apis-terms',
  templateUrl: './apis-terms.component.html'
})
export class ApisTermsComponent implements OnInit {

  items = APIS;

  components = APIS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...APIS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONTENEDORES_KEY, routes.get(CONTENEDORES_KEY)!);
    this.relatedSections.set(SECURITY_KEY,     routes.get(SECURITY_KEY)!);
    this.relatedSections.set(CD_CI_KEY,        routes.get(CD_CI_KEY)!);
    this.relatedSections.set(NUBE_KEY,         routes.get(NUBE_KEY)!);
    this.relatedSections.set(WEB_KEY,          routes.get(WEB_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      NUBE_KEY,                 routes.get(NUBE_KEY)!,
      META_CARACTERISTICAS_KEY, routes.get(META_CARACTERISTICAS_KEY)!
    );
  }

}

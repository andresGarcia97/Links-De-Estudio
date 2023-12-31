import { Component, OnInit } from '@angular/core';
import { APIS } from 'src/app/models/content/content2';
import { APIS_REF, LinkReferencia, CONTENEDORES_KEY, SEGURIDAD_KEY, CD_CI_KEY, WEB_KEY, NUBE_KEY } from 'src/app/models/linkReferencia';

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

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONTENEDORES_KEY, routes.get(CONTENEDORES_KEY)!);
    this.relatedSections.set(SEGURIDAD_KEY,    routes.get(SEGURIDAD_KEY)!);
    this.relatedSections.set(CD_CI_KEY,        routes.get(CD_CI_KEY)!);
    this.relatedSections.set(NUBE_KEY,         routes.get(NUBE_KEY)!);
    this.relatedSections.set(WEB_KEY,          routes.get(WEB_KEY)!);
  }

}

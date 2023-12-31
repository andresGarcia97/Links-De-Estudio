import { Component, OnInit } from '@angular/core';
import { NUBE } from 'src/app/models/content/content2';
import { CD_CI_KEY, CONTENEDORES_KEY, LinkReferencia, NUBE_AND_APIS, SEGURIDAD_KEY, WEB_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-nube',
  templateUrl: './nube.component.html'
})
export class NubeComponent implements OnInit {

  items = NUBE;

  components = NUBE_AND_APIS;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...NUBE_AND_APIS ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONTENEDORES_KEY, routes.get(CONTENEDORES_KEY)!);
    this.relatedSections.set(SEGURIDAD_KEY,    routes.get(SEGURIDAD_KEY)!);
    this.relatedSections.set(CD_CI_KEY,        routes.get(CD_CI_KEY)!);
    this.relatedSections.set(WEB_KEY,          routes.get(WEB_KEY)!);
  }

}

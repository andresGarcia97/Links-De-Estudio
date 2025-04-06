import { Component, OnInit } from '@angular/core';
import { CD_CI_INFRAESTRUCTURE } from 'src/app/models/content/content3';
import { APIS_KEY, CD_CI_REF, CONTENEDORES_KEY, HARDWARE_KEY, LinkReferencia, NUBE_KEY, WEB_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-cd-ci',
  templateUrl: './cd-ci.component.html'
})
export class CDCIComponent implements OnInit {

  items = CD_CI_INFRAESTRUCTURE;

  components = CD_CI_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...CD_CI_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONTENEDORES_KEY, routes.get(CONTENEDORES_KEY)!)
    this.relatedSections.set(HARDWARE_KEY,     routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(NUBE_KEY,         routes.get(NUBE_KEY)!);
    this.relatedSections.set(APIS_KEY,         routes.get(APIS_KEY)!);
    this.relatedSections.set(WEB_KEY,          routes.get(WEB_KEY)!);
  }

}

import { Component, OnInit } from '@angular/core';
import { CD_CI_INFRAESTRUCTURE } from 'src/app/models/content/content3';
import { CD_CI_REF, HARDWARE_KEY, LinkReferencia, NUBE_APIS_KEY, WEB_KEY } from 'src/app/models/linkReferencia';

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
    this.relatedSections.set(NUBE_APIS_KEY, routes.get(NUBE_APIS_KEY)!);
    this.relatedSections.set(HARDWARE_KEY , routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(WEB_KEY      , routes.get(WEB_KEY)!);
  }

}

import { Component, OnInit } from '@angular/core';
import { WEB } from 'src/app/models/content/content1';
import { BUENAS_PRACTICAS_KEY, CD_CI_KEY, FRAMEWORKS_KEY, LinkReferencia, NUBE_KEY, SECURITY_KEY, WEB_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html'
})
export class WebComponent implements OnInit {

  items = WEB;

  components = WEB_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...WEB_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(BUENAS_PRACTICAS_KEY, routes.get(BUENAS_PRACTICAS_KEY)!);
    this.relatedSections.set(FRAMEWORKS_KEY,       routes.get(FRAMEWORKS_KEY)!);
    this.relatedSections.set(SECURITY_KEY,         routes.get(SECURITY_KEY)!);
    this.relatedSections.set(CD_CI_KEY,            routes.get(CD_CI_KEY)!);
    this.relatedSections.set(NUBE_KEY,             routes.get(NUBE_KEY)!);
  }

}

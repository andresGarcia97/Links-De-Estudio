import { Component, OnInit } from '@angular/core';
import { SEGURIDAD } from 'src/app/models/content/content3';
import { LinkReferencia, NUBE_KEY, REQUISITOS_KEY, SEGURIDAD_REF, WEB_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html'
})
export class SeguridadComponent implements OnInit {

  items = SEGURIDAD;

  components = SEGURIDAD_REF;
  
  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...SEGURIDAD_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(REQUISITOS_KEY, routes.get(REQUISITOS_KEY)!);
    this.relatedSections.set(NUBE_KEY,       routes.get(NUBE_KEY)!);
    this.relatedSections.set(WEB_KEY,        routes.get(WEB_KEY)!);
  }

}

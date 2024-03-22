import { Component, OnInit } from '@angular/core';
import { SEGURIDAD } from 'src/app/models/content/content3';
import { APIS_KEY, HARDWARE_KEY, LinkReferencia, NUBE_KEY, REQUISITOS_KEY, SECURITY_REF, WEB_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html'
})
export class SeguridadComponent implements OnInit {

  items = SEGURIDAD;

  components = SECURITY_REF;
  
  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...SECURITY_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(REQUISITOS_KEY, routes.get(REQUISITOS_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,   routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(NUBE_KEY,       routes.get(NUBE_KEY)!);
    this.relatedSections.set(APIS_KEY,       routes.get(APIS_KEY)!);
    this.relatedSections.set(WEB_KEY,        routes.get(WEB_KEY)!);
  }

}

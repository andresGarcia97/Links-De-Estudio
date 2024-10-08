import { Component, OnInit } from '@angular/core';
import { HISTORIAS_USUARIO } from 'src/app/models/content/content2';
import { AGILES_KEY, CONOCIMIENTO_EMPIRICO_KEY, LinkReferencia, PEOPLE_KEY, REQUISITOS_KEY, USER_HISTORIES }
from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-historia-usuario',
  templateUrl: './historia-usuario.component.html'
})
export class HistoriaUsuarioComponent implements OnInit {

  items = HISTORIAS_USUARIO;

  components = USER_HISTORIES;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...USER_HISTORIES ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONOCIMIENTO_EMPIRICO_KEY, routes.get(CONOCIMIENTO_EMPIRICO_KEY)!);
    this.relatedSections.set(REQUISITOS_KEY,            routes.get(REQUISITOS_KEY)!);
    this.relatedSections.set(PEOPLE_KEY,                routes.get(PEOPLE_KEY)!);
    this.relatedSections.set(AGILES_KEY,                routes.get(AGILES_KEY)!);
  }

}

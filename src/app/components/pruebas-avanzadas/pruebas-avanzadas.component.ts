import { Component, OnInit } from '@angular/core';
import { PRUEBAS_AVANZADAS } from 'src/app/models/content/content2';
import { AGILES_KEY, ARQUITECTURAS_KEY, LinkReferencia, REQUISITOS_KEY, TESTING_ADVANCED, TESTING_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-pruebas-avanzadas',
  templateUrl: './pruebas-avanzadas.component.html'
})
export class PruebasAvanzadasComponent implements OnInit {

  items = PRUEBAS_AVANZADAS;

  components = TESTING_ADVANCED;
  
  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...TESTING_ADVANCED ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ARQUITECTURAS_KEY, routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(REQUISITOS_KEY,    routes.get(REQUISITOS_KEY)!);
    this.relatedSections.set(TESTING_KEY,       routes.get(TESTING_KEY)!);
    this.relatedSections.set(AGILES_KEY,        routes.get(AGILES_KEY)!);
  }

}

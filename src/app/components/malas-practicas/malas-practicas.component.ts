import { Component, OnInit } from '@angular/core';
import { MALAS_PRACTICAS } from 'src/app/models/content/content6';
import { 
  AGILES_KEY, ARQUITECTURAS_KEY, BUENAS_PRACTICAS_KEY, CONOCIMIENTO_EMPIRICO_KEY, LinkReferencia, MALAS_PRACTICAS_REF, METODOLOGIAS_KEY
} from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-malas-practicas',
  templateUrl: './malas-practicas.component.html'
})
export class MalasPracticasComponent implements OnInit {

  items = MALAS_PRACTICAS;

  components = MALAS_PRACTICAS_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...MALAS_PRACTICAS_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONOCIMIENTO_EMPIRICO_KEY, routes.get(CONOCIMIENTO_EMPIRICO_KEY)!);
    this.relatedSections.set(BUENAS_PRACTICAS_KEY,      routes.get(BUENAS_PRACTICAS_KEY)!);
    this.relatedSections.set(ARQUITECTURAS_KEY,         routes.get(ARQUITECTURAS_KEY)!);
    this.relatedSections.set(METODOLOGIAS_KEY,          routes.get(METODOLOGIAS_KEY)!);
    this.relatedSections.set(AGILES_KEY,                routes.get(AGILES_KEY)!);
  }

}

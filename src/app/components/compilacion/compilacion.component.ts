import { Component, OnInit } from '@angular/core';
import { COMPILACION } from 'src/app/models/content/content2';
import { CARACTERISTICAS_KEY, COMPILACION_REF, ESTRUCTURAS_KEY, HARDWARE_KEY, LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-compilacion',
  templateUrl: './compilacion.component.html'
})
export class CompilacionComponent implements OnInit {

  items = COMPILACION;

  components = COMPILACION_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...COMPILACION_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CARACTERISTICAS_KEY, routes.get(CARACTERISTICAS_KEY)!);
    this.relatedSections.set(ESTRUCTURAS_KEY,     routes.get(ESTRUCTURAS_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,        routes.get(HARDWARE_KEY)!);
  }

}

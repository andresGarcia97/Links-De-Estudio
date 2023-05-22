import { Component } from '@angular/core';
import { OTROS } from 'src/app/models/content/content1';
import { OTROS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html'
})
export class OtrosComponent {

  items = OTROS;

  components = new Map([ ...OTROS_REF ]);

  tittles = new Map<string, string>([
    ['scraping', 'Web Scrapping'],
    ['cdci', 'CD/CI'],
    ['devops', 'DevOps'],
    ['mvp', 'MVP'],
    ['turingComplete', 'Turing Complete'],
    ['ingenieriaInversa', 'Ingenieria Inversa'],
    ['dsl', 'DSL'],
    ['reglasInferencia', 'Reglas de Inferencia'],
    ['dataStoring', 'Almacenamiento de datos'],
    ['iascode', 'Infraestructura & Codigo']
  ]);

}

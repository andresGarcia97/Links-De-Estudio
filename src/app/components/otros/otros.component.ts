import { Component } from '@angular/core';
import { OTROS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html'
})
export class OtrosComponent extends LinkReferencia {

  items = OTROS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['scraping', 'Web Scrapping'],
    ['cdci', 'CD/CI'],
    ['devops', 'DevOps'],
    ['mvp', 'MVP'],
    ['turingComplete', 'Turing Complete'],
    ['ingenieriaInversa', 'Ingenieria Inversa'],
    ['dsl', 'DSL'],
    ['reglasInferencia', 'Reglas de Inferencia'],
    ['dataStoring', 'Almacenamiento de datos']
  ]);

}

import { Component } from '@angular/core';
import { PRUEBAS } from 'src/app/models/content/content2';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html'
})
export class PruebasComponent extends LinkReferencia {

  items = PRUEBAS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['principios', 'Principios de testing'],
    ['manifiesto', 'Testing manifiesto'],
    ['QAperson', 'QA'],
    ['tiposPruebas', 'Tipos'],
    ['beneficios', 'Beneficios'],
    ['nombramiento', 'Nombramiento'],
    ['first', 'Principio FIRST'],
    ['sutydoc', 'SUT & DOC'],
    ['dobles', 'Dobles'],
    ['aaa', 'AAA'],
    ['gwt', 'GWT'],
    ['piramide', 'Piramides de tests'],
    ['triangulo', 'Triangulo de Hierro'],
    ['cobertura', 'Cobertura'],
    ['falsos', 'Falsos Resultados'],
  ]);

}

import { Component, OnInit } from '@angular/core';
import { PRUEBAS } from 'src/app/models/content/content2';
import { TESTING } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html'
})
export class PruebasComponent implements OnInit {

  items = PRUEBAS;

  itemStart = '';

  components = new Map([ ...TESTING ]);

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

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

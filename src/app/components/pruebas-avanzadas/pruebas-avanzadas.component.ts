import { Component, OnInit } from '@angular/core';
import { PRUEBAS_AVANZADAS } from 'src/app/models/content/content2';
import { TESTING_ADVANCED } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-pruebas-avanzadas',
  templateUrl: './pruebas-avanzadas.component.html'
})
export class PruebasAvanzadasComponent implements OnInit {

  items = PRUEBAS_AVANZADAS;

  itemStart = '';

  components = new Map([ ...TESTING_ADVANCED ]);

  tittles = new Map<string, string>([
    ['cajaNegraBlanca', 'Caja Negra & Blanca'],
    ['valorLimite', 'Valores Limites'],
    ['clasesEquivalencia', 'Equivalencias'],
    ['grafosCausaEfecto', 'Causa -> Efecto'],
    ['tiposDePruebas', 'Tipos de pruebas'],
    ['outsideInside', 'Outside & Inside'],
    ['casosDePruebas', 'Casos de prueba'],
    ['casosDeUso', 'Casos de uso'],
    ['codeSmellsTests1', 'Code smells en testing #1'],
    ['codeSmellsTests2', 'Code smells en testing #2'],
    ['mutation', 'Pruebas de mutación']
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

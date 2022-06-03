import { Component } from '@angular/core';
import { PRUEBAS_AVANZADAS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-pruebas-avanzadas',
  templateUrl: './pruebas-avanzadas.component.html'
})
export class PruebasAvanzadasComponent extends LinkReferencia {

  items = PRUEBAS_AVANZADAS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['cajaNegraBlanca', 'Caja Negra & Blanca'],
    ['valorLimite', 'Valores Limites'],
    ['clasesEquivalencia', 'Equivalencias'],
    ['grafosCausaEfecto', 'Causa -> Efecto'],
    ['tiposDePruebas', 'Tipos de pruebas'],
    ['outsideInside', 'Outside & Inside'],
    ['casosDePruebas', 'Casos de prueba'],
    ['casosDeUso', 'Casos de uso'],
    ['codeSmellsTests1','Code smells en testing #1'],
    ['codeSmellsTests2','Code smells en testing #2']
  ]);

}

import { Component } from '@angular/core';
import { HISTORIAS_USUARIO } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-historia-usuario',
  templateUrl: './historia-usuario.component.html'
})
export class HistoriaUsuarioComponent extends LinkReferencia {

  items = HISTORIAS_USUARIO;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['historias', '¿ que son ?'],
    ['objetivos', '¿ que buscan ?'],
    ['partes', 'Partes'],
    ['invest', 'INVEST'],
    ['smart', 'SMART'],
    ['3c', 'Las 3 C'],
    ['gherkin', 'Gherkin'],
    ['descomposicionHU', 'Descomposición'],
    ['agil', 'Manifiesto Agil'],
    ['storyPoints', 'Puntos'],
  ]);

}

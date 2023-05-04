import { Component } from '@angular/core';
import { HISTORIAS_USUARIO } from 'src/app/models/content/content2';
import { USER_HISTORIES } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-historia-usuario',
  templateUrl: './historia-usuario.component.html'
})
export class HistoriaUsuarioComponent {

  items = HISTORIAS_USUARIO;

  components = new Map([ ...USER_HISTORIES ]);

  tittles = new Map<string, string>([
    ['historias', '¿ que son ?'],
    ['objetivos', '¿ que buscan ?'],
    ['partes', 'Partes'],
    ['invest', 'INVEST'],
    ['smart', 'SMART'],
    ['3c', 'Las 3 C'],
    ['gherkin', 'Gherkin'],
    ['descomposicionHU', 'Descomposición'],
    ['storyPoints', 'Puntos'],
    ['casosVsRequisitosVsHu', 'Hu Vs Casos de Uso']
  ]);

}

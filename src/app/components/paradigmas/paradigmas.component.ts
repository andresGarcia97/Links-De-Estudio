import { Component } from '@angular/core';
import { PARADIGMAS } from 'src/app/models/content/content1';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-paradigmas',
  templateUrl: './paradigmas.component.html'
})
export class ParadigmasComponent extends LinkReferencia {

  items = PARADIGMAS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['imperativo', 'Estilos Programación'],
    ['funcional', 'Funcional'],
    ['scripting', 'Scripting'],
    ['reactiva', 'Reactiva'],
    ['marcado', 'De Marcado'],
    ['aspectos', 'Aspectos'],
    ['logica', 'Logica'],
    ['estructurada', 'Estructurada'],
  ]);

}

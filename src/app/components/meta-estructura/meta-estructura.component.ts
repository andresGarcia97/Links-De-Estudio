import { Component } from '@angular/core';
import { META_ESTRUCTURAS } from 'src/app/models/content/content1';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-meta-estructura',
  templateUrl: './meta-estructura.component.html'
})
export class MetaEstructuraComponent extends LinkReferencia {

  items = META_ESTRUCTURAS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['scope', 'Scope'],
    ['precedencia', 'Precedencia'],
    ['verticalAndHorizontal', 'Organización'],
    ['expresionesRegulares', 'Expresiones regulares'],
    ['estructurasDatos', 'Estructuras de datos'],
    ['homoiconicidad', 'Homoiconicidad'],
    ['maquinaEstados', 'Maquina de estados'],
    ['sistemasComplejos', 'Sistemas Complejos'],
    ['funcionesLambda', 'Funciones lambda'],
    ['valueObjects', 'Value Objects'],
  ]);

}

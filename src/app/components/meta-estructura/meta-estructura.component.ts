import { Component } from '@angular/core';
import { META_ESTRUCTURAS } from 'src/app/models/content/content1';
import { META_ESTRUCTURAS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-meta-estructura',
  templateUrl: './meta-estructura.component.html'
})
export class MetaEstructuraComponent {

  items = META_ESTRUCTURAS;

  components = new Map([ ...META_ESTRUCTURAS_REF ]);

  tittles = new Map<string, string>([
    ['scope', 'Scope'],
    ['precedencia', 'Precedencia'],
    ['verticalAndHorizontal', 'Organización'],
    ['expresionesRegulares', 'Expresiones regulares'],
    ['estructurasDatos', 'Estructuras de datos I'],
    ['estructurasDatos2', 'Estructuras de datos II'],
    ['homoiconicidad', 'Homoiconicidad'],
    ['maquinaEstados', 'Maquina de estados'],
    ['sistemasComplejos', 'Sistemas Complejos'],
    ['funcionesLambda', 'Funciones lambda'],
    ['valueObjects', 'Value Objects'],
    ['dynamicProgramming', 'Programacion Dinamica'],
  ]);

}

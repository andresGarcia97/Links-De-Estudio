import { Component } from '@angular/core';
import { BUENAS_PRACTICAS } from 'src/app/models/content/content2';
import { BUENAS_PRACTICAS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-buenas-practicas',
  templateUrl: './buenas-practicas.component.html'
})
export class BuenasPracticasComponent {

  items = BUENAS_PRACTICAS;

  components = new Map([ ...BUENAS_PRACTICAS_REF ]);

  tittles = new Map<string, string>([
    ['practicas1', 'Parte #1'],
    ['practicas2', 'Parte #2'],
    ['practicas3', 'Parte #3'],
    ['practicas4', 'Parte #4'],
    ['complejidad', 'Complejidad'],
    ['complejidadCognitiva', 'Cognitiva'],
    ['complejidadAlgoritmica', 'Algoritmica'],
    ['logging', 'Logs VS Debug'],
    ['debugging', 'Debugging'],
    ['demeter', 'Ley de Demeter'],
    ['estandaresNombramiento', 'Nombramiento'],
    ['estatico', 'Analisis de codigo'],
    ['guardClauses', 'Guard Clauses'],
    ['semanticConstructors', 'Constructores Semanticos'],
    ['exceptionGoodPractices', 'Manejo de Excepciones'],
  ]);

}

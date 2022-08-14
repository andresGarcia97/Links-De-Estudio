import { Component } from '@angular/core';
import { META_CARACTERISTICAS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-meta-caracteristicas',
  templateUrl: './meta-caracteristicas.component.html'
})
export class MetaCaracteristicasComponent extends LinkReferencia {

  items = META_CARACTERISTICAS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['metaDatos', 'Meta data'],
    ['metaClase', 'Meta Clase'],
    ['reflexion', 'Reflexión'],
    ['asserts', 'Aserciones'],
    ['excepciones', 'Exepciones'],
    ['cache', 'Cache'],
    ['hilos', 'Hilos'],
    ['argumentos', 'Argumentos'],
    ['concurrenciaParalelismo', 'Concurrencia'],
    ['ortogonalidad', 'Ortogonalidad'],
    ['boilerPlate', 'BoilerPlate'],
    ['recursividad', 'Recursividad'],
    ['backtracing', 'Back tracing'],
    ['rawTypes', 'Tipos crudos'],
    ['memoryAndGarbage', 'Fugas de memoria'],
  ]);

}

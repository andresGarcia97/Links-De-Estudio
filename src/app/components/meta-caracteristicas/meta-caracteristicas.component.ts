import { Component, OnInit } from '@angular/core';
import { META_CARACTERISTICAS } from 'src/app/models/content/content1';
import { META_CARATERISTICAS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-meta-caracteristicas',
  templateUrl: './meta-caracteristicas.component.html'
})
export class MetaCaracteristicasComponent implements OnInit {

  items = META_CARACTERISTICAS;

  components = new Map([ ...META_CARATERISTICAS_REF ]);

  itemStart = '';

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

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

import { Component, OnInit } from '@angular/core';
import { META_CARACTERISTICAS } from 'src/app/models/content/content1';
import { ESTRUCTURAS_KEY, LinkReferencia, META_CARATERISTICAS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-meta-caracteristicas',
  templateUrl: './meta-caracteristicas.component.html'
})
export class MetaCaracteristicasComponent implements OnInit {

  items = META_CARACTERISTICAS;

  components = new Map([ ...META_CARATERISTICAS_REF ]);

  itemStart = '';

  relatedSections = new Map<string, string>([]);

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
    ['footprint', 'Huellas de memoria'],
    ['featureFlag', 'Feature Flags']
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(ESTRUCTURAS_KEY, routes.get(ESTRUCTURAS_KEY)!);
  }

}

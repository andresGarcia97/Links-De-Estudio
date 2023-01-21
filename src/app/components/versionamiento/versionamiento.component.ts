import { Component } from '@angular/core';
import { VERSIONAMIENTO } from 'src/app/models/content/content3';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-versionamiento',
  templateUrl: './versionamiento.component.html'
})
export class VersionamientoComponent extends LinkReferencia {

  items = VERSIONAMIENTO;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['git', 'Gestor de Versiones'],
    ['dependencias', 'Dependencias Web'],
    ['gradlevsmaven', 'Gradle VS Maven'],
    ['versionamiento', 'Versionamiento'],
    ['licencias', 'Licencias'],
    ['documentation', 'Documentacion'],

  ]);

}

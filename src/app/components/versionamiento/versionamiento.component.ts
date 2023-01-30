import { Component } from '@angular/core';
import { VERSIONAMIENTO } from 'src/app/models/content/content3';
import { VERSIONAMIENTO_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-versionamiento',
  templateUrl: './versionamiento.component.html'
})
export class VersionamientoComponent {

  items = VERSIONAMIENTO;

  components = new Map([ ...VERSIONAMIENTO_REF ]);

  tittles = new Map<string, string>([
    ['git', 'Gestor de Versiones'],
    ['dependencias', 'Dependencias Web'],
    ['gradlevsmaven', 'Gradle VS Maven'],
    ['versionamiento', 'Versionamiento'],
    ['licencias', 'Licencias'],
    ['documentation', 'Documentacion'],

  ]);

}

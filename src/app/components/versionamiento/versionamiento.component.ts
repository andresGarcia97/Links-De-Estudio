import { Component } from '@angular/core';

@Component({
  selector: 'app-versionamiento',
  templateUrl: './versionamiento.component.html'
})
export class VersionamientoComponent {

  selection = '';
  referencia = '';

  constructor() { }

  public linkReferencia(seleccion: string = '', link: string = ''): void {
    this.selection = seleccion;
    this.referencia = link;
  }

}

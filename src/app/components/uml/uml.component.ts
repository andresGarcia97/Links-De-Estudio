import { Component } from '@angular/core';

@Component({
  selector: 'app-uml',
  templateUrl: './uml.component.html'
})
export class UmlComponent {

  selection = '';
  referencia = '';

  constructor() { }

  public linkReferencia(seleccion: string = '', link: string = ''): void {
    this.selection = seleccion;
    this.referencia = link;
  }
}

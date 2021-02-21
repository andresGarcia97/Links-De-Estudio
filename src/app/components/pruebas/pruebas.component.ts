import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html'
})
export class PruebasComponent {

  selection = '';
  referencia = '';

  constructor() { }

  public linkReferencia(seleccion: string = '', link: string = ''): void {
    this.selection = seleccion;
    this.referencia = link;
  }

}

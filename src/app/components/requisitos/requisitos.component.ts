import { Component } from '@angular/core';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html'
})
export class RequisitosComponent {

  selection = '';
  referencia = '';

  constructor() { }

  public linkReferencia(seleccion: string = '', link: string = ''): void {
    this.selection = seleccion;
    this.referencia = link;
  }

}

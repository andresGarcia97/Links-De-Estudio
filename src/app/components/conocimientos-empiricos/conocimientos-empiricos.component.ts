import { Component } from '@angular/core';

@Component({
  selector: 'app-conocimientos-empiricos',
  templateUrl: './conocimientos-empiricos.component.html'
})
export class ConocimientosEmpiricosComponent {

  selection = '';
  referencia = '';

  constructor() { }

  public linkReferencia(seleccion: string = '', link: string = ''): void {
    this.selection = seleccion;
    this.referencia = link;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html'
})
export class WebComponent {

  selection = '';
  referencia = '';

  constructor() { }

  public linkReferencia(seleccion: string = '', link: string = ''): void {
    this.selection = seleccion;
    this.referencia = link;
  }

}

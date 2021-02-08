import { Component } from '@angular/core';

@Component({
  selector: 'app-historia-usuario',
  templateUrl: './historia-usuario.component.html'
})
export class HistoriaUsuarioComponent {

  selection = '';
  referencia = '';

  constructor() { }

  public linkReferencia(seleccion: string = '', link: string = ''): void {
    this.selection = seleccion;
    this.referencia = link;
  }

}

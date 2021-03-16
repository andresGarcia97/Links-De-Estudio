import { Component } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html'
})
export class GitComponent  {

  selection = '';
  referencia = '';

  constructor() { }

  public linkReferencia(seleccion: string = '', link: string = ''): void {
    this.selection = seleccion;
    this.referencia = link;
  }

}

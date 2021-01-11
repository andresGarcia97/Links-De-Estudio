import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Links de Estudio';
  selection = '';
  referencia = '';

  public linkReferencia(seleccion: string = '', link: string = '', elemento: any): void {
    this.selection = seleccion;
    this.referencia = link;
    this.scrollToElement(elemento);
  }

  public scrollToElement($element: any): void {
    if (typeof $element !== 'undefined') {
      $element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}


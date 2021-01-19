import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const scroll$ = fromEvent(document, 'scroll');

const calcularPorcentaje = (event: any) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;
  return scrollTop / (scrollHeight - clientHeight) * 100;
};

const porcentaje = scroll$.pipe(
  map(event => calcularPorcentaje(event))
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Links de Estudio';
  fechaActualizacion = '18/01/2021';
  selection = '';
  referencia = '';
  porciento: any = porcentaje.subscribe((valor) => {
    this.porciento = valor;
  });

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

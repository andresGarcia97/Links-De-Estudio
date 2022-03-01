import { Component } from '@angular/core';
import { PRUEBAS_AVANZADAS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-pruebas-avanzadas',
  templateUrl: './pruebas-avanzadas.component.html'
})
export class PruebasAvanzadasComponent extends LinkReferencia {

  items = PRUEBAS_AVANZADAS;

  lengthItems = this.items.length - 1;

}

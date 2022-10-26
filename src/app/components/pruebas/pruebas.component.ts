import { Component } from '@angular/core';
import { PRUEBAS } from 'src/app/models/content/content2';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html'
})
export class PruebasComponent extends LinkReferencia {

  items = PRUEBAS;

  lengthItems = this.items.length - 1;

}

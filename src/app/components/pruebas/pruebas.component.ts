import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html'
})
export class PruebasComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

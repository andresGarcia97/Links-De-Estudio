import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.component.html'
})
export class CalidadComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

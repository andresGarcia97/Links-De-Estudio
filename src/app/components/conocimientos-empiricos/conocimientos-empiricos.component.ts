import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-conocimientos-empiricos',
  templateUrl: './conocimientos-empiricos.component.html'
})
export class ConocimientosEmpiricosComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

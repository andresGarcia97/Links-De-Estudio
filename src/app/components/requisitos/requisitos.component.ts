import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html'
})
export class RequisitosComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

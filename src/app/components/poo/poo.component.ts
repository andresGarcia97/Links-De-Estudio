import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html'
})
export class PooComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

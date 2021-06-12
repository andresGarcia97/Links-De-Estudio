import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-agiles',
  templateUrl: './agiles.component.html'
})
export class AgilesComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-patrones',
  templateUrl: './patrones.component.html'
})
export class PatronesComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

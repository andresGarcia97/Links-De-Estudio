import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-refactorizacion',
  templateUrl: './refactorizacion.component.html'
})
export class RefactorizacionComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

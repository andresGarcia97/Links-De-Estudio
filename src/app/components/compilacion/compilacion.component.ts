import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-compilacion',
  templateUrl: './compilacion.component.html'
})
export class CompilacionComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

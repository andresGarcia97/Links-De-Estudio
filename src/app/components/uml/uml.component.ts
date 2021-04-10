import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-uml',
  templateUrl: './uml.component.html'
})
export class UmlComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

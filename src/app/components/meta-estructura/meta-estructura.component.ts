import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-meta-estructura',
  templateUrl: './meta-estructura.component.html'
})
export class MetaEstructuraComponent extends LinkReferencia {

  constructor() {
    super();
  }


}

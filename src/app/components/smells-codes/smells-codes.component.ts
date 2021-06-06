import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-smells-codes',
  templateUrl: './smells-codes.component.html'
})
export class SmellsCodesComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

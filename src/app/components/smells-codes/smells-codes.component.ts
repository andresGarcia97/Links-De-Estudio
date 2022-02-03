import { Component } from '@angular/core';
import { SMELLS_CODES } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-smells-codes',
  templateUrl: './smells-codes.component.html'
})
export class SmellsCodesComponent extends LinkReferencia {

  items = SMELLS_CODES;

}

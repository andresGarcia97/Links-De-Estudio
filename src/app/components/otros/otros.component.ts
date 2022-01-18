import { Component } from '@angular/core';
import { OTROS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html'
})
export class OtrosComponent extends LinkReferencia {

  items = OTROS;

}

import { Component } from '@angular/core';
import { PARADIGMAS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-paradigmas',
  templateUrl: './paradigmas.component.html'
})
export class ParadigmasComponent extends LinkReferencia {

  items = PARADIGMAS;

}

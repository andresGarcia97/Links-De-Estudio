import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-estrategias-desarrollo',
  templateUrl: './estrategias-desarrollo.component.html'
})
export class EstrategiasDesarrolloComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

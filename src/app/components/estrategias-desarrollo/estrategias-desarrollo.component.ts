import { Component } from '@angular/core';
import { ESTATEGIAS_DESARROLLO } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-estrategias-desarrollo',
  templateUrl: './estrategias-desarrollo.component.html'
})
export class EstrategiasDesarrolloComponent extends LinkReferencia {

  items = ESTATEGIAS_DESARROLLO;

}

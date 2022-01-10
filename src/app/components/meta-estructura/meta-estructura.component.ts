import { Component } from '@angular/core';
import { META_ESTRUCTURAS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-meta-estructura',
  templateUrl: './meta-estructura.component.html'
})
export class MetaEstructuraComponent extends LinkReferencia {

  items = META_ESTRUCTURAS;

}

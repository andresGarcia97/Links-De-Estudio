import { Component } from '@angular/core';
import { META_CARACTERISTICAS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-meta-caracteristicas',
  templateUrl: './meta-caracteristicas.component.html'
})
export class MetaCaracteristicasComponent extends LinkReferencia {

  items = META_CARACTERISTICAS;

}

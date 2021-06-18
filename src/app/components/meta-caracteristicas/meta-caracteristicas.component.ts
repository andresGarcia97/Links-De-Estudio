import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-meta-caracteristicas',
  templateUrl: './meta-caracteristicas.component.html'
})
export class MetaCaracteristicasComponent extends LinkReferencia {

  constructor() {
    super();
  }


}

import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-metodologias',
  templateUrl: './metodologias.component.html'
})
export class MetodologiasComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

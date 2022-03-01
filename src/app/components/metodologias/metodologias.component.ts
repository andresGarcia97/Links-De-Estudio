import { Component } from '@angular/core';
import { METODOLOGIAS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-metodologias',
  templateUrl: './metodologias.component.html'
})
export class MetodologiasComponent extends LinkReferencia {

  items = METODOLOGIAS;

  lengthItems = this.items.length - 1;

}

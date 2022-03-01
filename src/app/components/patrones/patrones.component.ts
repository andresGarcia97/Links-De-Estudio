import { Component } from '@angular/core';
import { PATRONES } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-patrones',
  templateUrl: './patrones.component.html'
})
export class PatronesComponent extends LinkReferencia {

  items = PATRONES;

  lengthItems = this.items.length - 1;

}

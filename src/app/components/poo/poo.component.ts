import { Component } from '@angular/core';
import { POO } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html'
})
export class PooComponent extends LinkReferencia {

  items = POO;

  lengthItems = this.items.length - 1;

}

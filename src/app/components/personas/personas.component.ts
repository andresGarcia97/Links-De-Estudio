import { Component } from '@angular/core';
import { PERSONAS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html'
})
export class PersonasComponent extends LinkReferencia {

  items = PERSONAS;

  lengthItems = this.items.length - 1;

}

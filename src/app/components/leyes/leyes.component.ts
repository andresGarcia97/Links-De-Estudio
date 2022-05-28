import { Component } from '@angular/core';
import { LEYES } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-leyes',
  templateUrl: './leyes.component.html'
})
export class LeyesComponent extends LinkReferencia {

  items = LEYES;

  lengthItems = this.items.length - 1;
}

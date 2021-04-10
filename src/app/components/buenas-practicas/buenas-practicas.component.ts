import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-buenas-practicas',
  templateUrl: './buenas-practicas.component.html'
})
export class BuenasPracticasComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

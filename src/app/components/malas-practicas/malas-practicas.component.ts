import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-malas-practicas',
  templateUrl: './malas-practicas.component.html'
})
export class MalasPracticasComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

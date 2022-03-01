import { Component } from '@angular/core';
import { MALAS_PRACTICAS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-malas-practicas',
  templateUrl: './malas-practicas.component.html'
})
export class MalasPracticasComponent extends LinkReferencia {

  items = MALAS_PRACTICAS;

  lengthItems = this.items.length - 1;

}

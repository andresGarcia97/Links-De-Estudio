import { Component } from '@angular/core';
import { REFACTORIZACION } from 'src/app/models/content/content3';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-refactorizacion',
  templateUrl: './refactorizacion.component.html'
})
export class RefactorizacionComponent extends LinkReferencia {

  items = REFACTORIZACION;

  lengthItems = this.items.length - 1;

}

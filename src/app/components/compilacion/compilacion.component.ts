import { Component } from '@angular/core';
import { COMPILACION } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-compilacion',
  templateUrl: './compilacion.component.html'
})
export class CompilacionComponent extends LinkReferencia {

  items = COMPILACION;

  lengthItems = this.items.length - 1;

}

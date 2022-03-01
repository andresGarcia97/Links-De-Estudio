import { Component } from '@angular/core';
import { CONOCIMIENTOS_EMPIRICOS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-conocimientos-empiricos',
  templateUrl: './conocimientos-empiricos.component.html'
})
export class ConocimientosEmpiricosComponent extends LinkReferencia {

  items = CONOCIMIENTOS_EMPIRICOS;

  lengthItems = this.items.length - 1;

}

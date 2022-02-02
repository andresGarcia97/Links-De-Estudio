import { Component } from '@angular/core';
import { REQUISITOS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html'
})
export class RequisitosComponent extends LinkReferencia {

  items = REQUISITOS;

}

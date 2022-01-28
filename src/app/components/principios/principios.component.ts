import { Component } from '@angular/core';
import { PRINCIPIOS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-principios',
  templateUrl: './principios.component.html'
})
export class PrincipiosComponent extends LinkReferencia {

  items = PRINCIPIOS;

}

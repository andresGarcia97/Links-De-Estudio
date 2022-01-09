import { Component } from '@angular/core';
import { AGILES } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-agiles',
  templateUrl: './agiles.component.html'
})
export class AgilesComponent extends LinkReferencia {

  keys = AGILES;

}

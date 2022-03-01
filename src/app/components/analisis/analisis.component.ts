import { Component } from '@angular/core';
import { ANALISIS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html'
})
export class AnalisisComponent extends LinkReferencia {

  items = ANALISIS;

  lengthItems = this.items.length - 1;

}

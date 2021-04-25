import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html'
})
export class AnalisisComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

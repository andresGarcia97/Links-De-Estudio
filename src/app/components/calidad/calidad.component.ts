import { Component } from '@angular/core';
import { CALIDAD } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.component.html'
})
export class CalidadComponent extends LinkReferencia {

  items = CALIDAD;

}

import { Component } from '@angular/core';
import { SEGURIDAD } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html'
})
export class SeguridadComponent extends LinkReferencia {

  items = SEGURIDAD;

}

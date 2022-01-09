import { Component } from '@angular/core';
import { BUENAS_PRACTICAS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-buenas-practicas',
  templateUrl: './buenas-practicas.component.html'
})
export class BuenasPracticasComponent extends LinkReferencia {

  items = BUENAS_PRACTICAS;

}

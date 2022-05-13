import { Component } from '@angular/core';
import { DOCKER } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-docker',
  templateUrl: './contenedores.component.html'
})
export class ContenedoresComponent extends LinkReferencia {

  items = DOCKER;

  lengthItems = this.items.length - 1;

}

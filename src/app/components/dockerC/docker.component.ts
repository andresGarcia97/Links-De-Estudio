import { Component } from '@angular/core';
import { DOCKER } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html'
})
export class DockerComponent extends LinkReferencia {

  items = DOCKER;

  lengthItems = this.items.length - 1;

}

import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html'
})
export class DockerComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

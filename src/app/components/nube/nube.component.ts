import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-nube',
  templateUrl: './nube.component.html'
})
export class NubeComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

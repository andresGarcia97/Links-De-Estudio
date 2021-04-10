import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-versionamiento',
  templateUrl: './versionamiento.component.html'
})
export class VersionamientoComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

import { Component } from '@angular/core';
import { VERSIONAMIENTO } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-versionamiento',
  templateUrl: './versionamiento.component.html'
})
export class VersionamientoComponent extends LinkReferencia {

  items = VERSIONAMIENTO;

  lengthItems = this.items.length - 1;

}

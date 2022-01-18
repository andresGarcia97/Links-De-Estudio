import { Component } from '@angular/core';
import { NUBE } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-nube',
  templateUrl: './nube.component.html'
})
export class NubeComponent extends LinkReferencia {

  items = NUBE;

}

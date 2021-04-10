import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html'
})
export class FrameworksComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

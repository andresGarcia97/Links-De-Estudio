import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html'
})
export class WebComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

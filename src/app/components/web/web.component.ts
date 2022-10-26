import { Component } from '@angular/core';
import { WEB } from 'src/app/models/content/content1';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html'
})
export class WebComponent extends LinkReferencia {

  items = WEB;

  lengthItems = this.items.length - 1;

}

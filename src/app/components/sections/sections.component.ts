import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html'
})
export class SectionsComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

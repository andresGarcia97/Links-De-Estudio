import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html'
})
export class GlosarioComponent extends LinkReferencia {

  onlyLinks = Array
    .from(this.links, ([name, value]) => ({ name, value }))
    .sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });

  constructor() {
    super();
  }

}

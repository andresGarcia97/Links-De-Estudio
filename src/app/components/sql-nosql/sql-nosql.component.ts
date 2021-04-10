import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-sql-nosql',
  templateUrl: './sql-nosql.component.html'
})
export class SqlNosqlComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

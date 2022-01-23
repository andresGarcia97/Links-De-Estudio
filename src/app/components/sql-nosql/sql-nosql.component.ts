import { Component } from '@angular/core';
import { BASES_DE_DATOS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-sql-nosql',
  templateUrl: './sql-nosql.component.html'
})
export class SqlNosqlComponent extends LinkReferencia {

  items = BASES_DE_DATOS;

}

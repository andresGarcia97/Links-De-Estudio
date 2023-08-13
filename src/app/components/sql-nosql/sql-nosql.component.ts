import { Component, OnInit } from '@angular/core';
import { BASES_DE_DATOS } from 'src/app/models/content/content1';
import { PERSISTENCY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-sql-nosql',
  templateUrl: './sql-nosql.component.html'
})
export class SqlNosqlComponent implements OnInit {

  items = BASES_DE_DATOS;

  components = new Map([ ...PERSISTENCY ]);

  itemStart = '';

  tittles = new Map<string, string>([
    ['sql', 'SQL'],
    ['dbms', 'DBMS'],
    ['crud', 'CRUD'],
    ['dl', 'DDL, DML, DCL, TCL'],
    ['integridad', 'Integridad'],
    ['erd', 'ERD'],
    ['normalizacion', 'Normalización'],
    ['acid', 'Esquema ACID'],
    ['indices', 'Indices'],
    ['joins', 'Tipos de Joins'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

import { Component } from '@angular/core';
import { BASES_DE_DATOS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-sql-nosql',
  templateUrl: './sql-nosql.component.html'
})
export class SqlNosqlComponent extends LinkReferencia {

  items = BASES_DE_DATOS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['sql', 'SQL'],
    ['dbms', 'DBMS'],
    ['crud', 'CRUD'],
    ['dl', 'DDL, DML, DCL, TCL'],
    ['integridad', 'Integridad'],
    ['erd', 'ERD'],
    ['normalizacion', 'Normalización'],
    ['nosql', 'NoSQL'],
    ['tiposBD', 'Tipos NoSQL'],
    ['acid', 'Esquema ACID'],
    ['orm', 'ORM'],
    ['consistenciaEventual', 'Consistencia'],
    ['algebraRelacional', 'Algebra Relacional'],
    ['n+1selects', 'N + 1 Selects'],
    ['indices', 'Indices'],
    ['boyceCodd', 'Boyce-Codd'],
    ['sqlVsNosql', 'SQL ó NoSql']

  ]);

}

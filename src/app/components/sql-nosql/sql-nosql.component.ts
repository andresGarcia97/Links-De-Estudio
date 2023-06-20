import { Component } from '@angular/core';
import { BASES_DE_DATOS } from 'src/app/models/content/content1';
import { PERSISTENCY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-sql-nosql',
  templateUrl: './sql-nosql.component.html'
})
export class SqlNosqlComponent {

  items = BASES_DE_DATOS;

  components = new Map([ ...PERSISTENCY ]);

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
    ['sqlVsNosql', 'SQL ó NoSql'],
    ['joins', 'Tipos de Joins'],
  ]);

}

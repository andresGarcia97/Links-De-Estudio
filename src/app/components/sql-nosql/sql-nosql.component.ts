import { Component, OnInit } from '@angular/core';
import { BASES_DE_DATOS } from 'src/app/models/content/content1';
import { DATA_BASES_ADVANCED_KEY, LinkReferencia, PATRONES_KEY, PERSISTENCY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-sql-nosql',
  templateUrl: './sql-nosql.component.html'
})
export class SqlNosqlComponent implements OnInit {

  items = BASES_DE_DATOS;

  components = new Map([ ...PERSISTENCY ]);

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map<string, string>([
    ['sql', 'SQL'],
    ['dbms', 'DBMS'],
    ['crud', 'CRUD'],
    ['dl', 'DDL, DML, DCL, TCL'],
    ['integridad', 'Integridad'],
    ['erd', 'ERD'],
    ['normalizacion', 'Normalización'],
    ['acid', 'ACID'],
    ['indices', 'Indices'],
    ['joins', 'Tipos de Joins'],
    ['constraints', 'Constraints'],
    ['dbDesign', 'Diseño'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(DATA_BASES_ADVANCED_KEY, routes.get(DATA_BASES_ADVANCED_KEY)!);
    this.relatedSections.set(PATRONES_KEY           , routes.get(PATRONES_KEY)!);
  }

}

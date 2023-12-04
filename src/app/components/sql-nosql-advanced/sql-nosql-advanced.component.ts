import { Component, OnInit } from '@angular/core';
import { BASE_DE_DATOS_AVANZADO } from 'src/app/models/content/content1';
import { DATA_BASES_KEY, LinkReferencia, PERSISTENCY_ADVANCED } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-sql-nosql-advanced',
  templateUrl: './sql-nosql-advanced.component.html'
})
export class SqlNosqlAdvancedComponent implements OnInit {

  items = BASE_DE_DATOS_AVANZADO;

  components = new Map([ ...PERSISTENCY_ADVANCED ]);

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map<string, string>([
    ['nosql', 'NoSQL'],
    ['tiposBD', 'Tipos NoSQL'],
    ['orm', 'ORM'],
    ['consistenciaEventual', 'Consistencia'],
    ['algebraRelacional', 'Algebra Relacional'],
    ['n+1selects', 'N + 1 Selects'],
    ['boyceCodd', 'Boyce-Codd'],
    ['sqlVsNosql', 'SQL ó NoSql'],
    ['locking', 'Bloqueos'],
    ['sqlOrderExecution', 'Orden de Ejecución'],
    ['sargeable', 'SARGEABLE'],
    ['MVCC','Control de Concurrencia'],
    ['acidVSbase', 'BASE']
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(DATA_BASES_KEY, routes.get(DATA_BASES_KEY)!);
  }
  
}

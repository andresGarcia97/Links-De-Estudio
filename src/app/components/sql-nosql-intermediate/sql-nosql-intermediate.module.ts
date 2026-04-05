import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PERSISTENCY_INTERMEDIATE_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';
import { SqlNosqlIntermediateComponent } from './sql-nosql-intermediate.component';

const routes: Routes = [
  {
    path: '',
    component: SqlNosqlIntermediateComponent,
    resolve: { [PERSISTENCY_INTERMEDIATE_PATH.propertyNameData]: contentResolver(PERSISTENCY_INTERMEDIATE_PATH.file) }
  }
];

@NgModule({
  declarations: [SqlNosqlIntermediateComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class SqlNoSqlIntermediateModule { }

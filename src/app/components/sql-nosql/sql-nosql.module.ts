import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SqlNosqlComponent } from './sql-nosql.component';
import { PERSISTENCY_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: SqlNosqlComponent,
    resolve: { [PERSISTENCY_PATH.propertyNameData]: contentResolver(PERSISTENCY_PATH.file) }
  }
];

@NgModule({
  declarations: [SqlNosqlComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class SqlNoSqlModule { }

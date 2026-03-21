import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SqlNosqlAdvancedComponent } from './sql-nosql-advanced.component';
import { PERSISTENCY_ADVANCED_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: SqlNosqlAdvancedComponent,
    resolve: { [PERSISTENCY_ADVANCED_PATH.propertyNameData]: contentResolver(PERSISTENCY_ADVANCED_PATH.file) }
  }
];

@NgModule({
  declarations: [SqlNosqlAdvancedComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class SqlNoSqlAdvancedModule { }

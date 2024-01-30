import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SqlNosqlAdvancedComponent } from './sql-nosql-advanced.component';

const routes: Routes = [
  {
    path: '',
    component: SqlNosqlAdvancedComponent
  }
];

@NgModule({
  declarations: [SqlNosqlAdvancedComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class SqlNoSqlAdvancedModule { }

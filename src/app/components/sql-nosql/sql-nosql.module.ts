import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SqlNosqlComponent } from './sql-nosql.component';

const routes: Routes = [
  {
    path: '',
    component: SqlNosqlComponent
  }
];

@NgModule({
  declarations: [SqlNosqlComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class SqlNoSqlModule { }

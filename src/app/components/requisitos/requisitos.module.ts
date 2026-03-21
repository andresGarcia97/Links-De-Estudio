import { NgModule } from '@angular/core';
import { RequisitosComponent } from './requisitos.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { REQUISITOS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: RequisitosComponent,
    resolve: { [REQUISITOS_PATH.propertyNameData]: contentResolver(REQUISITOS_PATH.file) }
  }
];

@NgModule({
  declarations: [RequisitosComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class RequisitosModule { }

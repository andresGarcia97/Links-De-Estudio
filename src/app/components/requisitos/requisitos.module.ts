import { NgModule } from '@angular/core';
import { RequisitosComponent } from './requisitos.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: RequisitosComponent
  }
];

@NgModule({
  declarations: [RequisitosComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class RequisitosModule { }

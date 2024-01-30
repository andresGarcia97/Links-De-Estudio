import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { RefactorizacionComponent } from './refactorizacion.component';

const routes: Routes = [
  {
    path: '',
    component: RefactorizacionComponent
  }
];

@NgModule({
  declarations: [RefactorizacionComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class RefactorizacionModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CompilacionComponent } from './compilacion.component';

const routes: Routes = [
  {
    path: '',
    component: CompilacionComponent
  }
];

@NgModule({
  declarations: [CompilacionComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class CompilacionModule { }

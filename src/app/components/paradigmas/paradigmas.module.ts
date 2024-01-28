import { NgModule } from '@angular/core';
import { ParadigmasComponent } from './paradigmas.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: ParadigmasComponent
  }
];

@NgModule({
  declarations: [ParadigmasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ParadigmasModule { }

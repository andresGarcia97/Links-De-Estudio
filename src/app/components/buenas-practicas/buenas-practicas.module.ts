import { NgModule } from '@angular/core';
import { BuenasPracticasComponent } from './buenas-practicas.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: BuenasPracticasComponent
  }
];

@NgModule({
  declarations: [BuenasPracticasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class BuenasPracticasModule { }

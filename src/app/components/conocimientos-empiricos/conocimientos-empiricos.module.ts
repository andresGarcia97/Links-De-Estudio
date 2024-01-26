import { NgModule } from '@angular/core';
import { ConocimientosEmpiricosComponent } from './conocimientos-empiricos.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: ConocimientosEmpiricosComponent
  }
];

@NgModule({
  declarations: [ConocimientosEmpiricosComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ConocimientosEmpiricosModule { }

import { NgModule } from '@angular/core';
import { CalidadComponent } from './calidad.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: CalidadComponent
  }
];

@NgModule({
  declarations: [CalidadComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class CalidadModule { }

import { NgModule } from '@angular/core';
import { ObservabilidadComponent } from './observabilidad.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: ObservabilidadComponent
  }
];

@NgModule({
  declarations: [ObservabilidadComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ObservabilidadModule { }

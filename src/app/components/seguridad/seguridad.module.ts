import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SeguridadComponent } from './seguridad.component';

const routes: Routes = [
  {
    path: '',
    component: SeguridadComponent
  }
];

@NgModule({
  declarations: [SeguridadComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class SeguridadModule { }

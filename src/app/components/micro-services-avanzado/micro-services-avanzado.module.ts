import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MicroServicesAvanzadoComponent } from './micro-services-avanzado.component';

const routes: Routes = [
  {
    path: '',
    component: MicroServicesAvanzadoComponent
  }
];

@NgModule({
  declarations: [MicroServicesAvanzadoComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class MicroServicesAvanzadoModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MicroServicesComponent } from './micro-services.component';

const routes: Routes = [
  {
    path: '',
    component: MicroServicesComponent
  }
];

@NgModule({
  declarations: [MicroServicesComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class MicroServicesModule { }

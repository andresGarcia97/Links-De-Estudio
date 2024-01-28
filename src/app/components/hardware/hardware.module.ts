import { NgModule } from '@angular/core';
import { HardwareComponent } from './hardware.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: HardwareComponent
  }
];

@NgModule({
  declarations: [HardwareComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class HardwareModule { }

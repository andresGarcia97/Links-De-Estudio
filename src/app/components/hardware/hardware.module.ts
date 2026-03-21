import { NgModule } from '@angular/core';
import { HardwareComponent } from './hardware.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { contentResolver } from '../core/content.resolver';
import { HARDWARE_PATH } from 'src/app/models/relationsSummary';

const routes: Routes = [
  {
    path: '',
    component: HardwareComponent,
    resolve: { [HARDWARE_PATH.propertyNameData]: contentResolver(HARDWARE_PATH.file) }
  }
];

@NgModule({
  declarations: [HardwareComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class HardwareModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { VersionamientoComponent } from './versionamiento.component';

const routes: Routes = [
  {
    path: '',
    component: VersionamientoComponent
  }
];

@NgModule({
  declarations: [VersionamientoComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class VersionamientoModule { }

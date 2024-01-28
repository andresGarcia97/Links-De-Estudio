import { NgModule } from '@angular/core';
import { NubeComponent } from './nube.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: NubeComponent
  }
];

@NgModule({
  declarations: [NubeComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class NubeModule { }

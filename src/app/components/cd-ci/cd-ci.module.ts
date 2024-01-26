import { NgModule } from '@angular/core';
import { CDCIComponent } from './cd-ci.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: CDCIComponent
  }
];

@NgModule({
  declarations: [CDCIComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class CdCiModule { }

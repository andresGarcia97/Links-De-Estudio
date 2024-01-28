import { NgModule } from '@angular/core';
import { PooComponent } from './poo.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: PooComponent
  }
];

@NgModule({
  declarations: [PooComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class POOModule { }

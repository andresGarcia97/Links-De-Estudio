import { NgModule } from '@angular/core';
import { AgilesComponent } from './agiles.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: AgilesComponent,
  }
];

@NgModule({
  declarations: [AgilesComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class AgilesModule { }

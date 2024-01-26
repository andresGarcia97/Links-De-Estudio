import { NgModule } from '@angular/core';
import { AnalisisComponent } from './analisis.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: AnalisisComponent
  }
];

@NgModule({
  declarations: [AnalisisComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class AnalisisModule { }

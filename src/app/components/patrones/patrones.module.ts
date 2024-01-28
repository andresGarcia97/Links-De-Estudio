import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PatronesComponent } from './patrones.component';

const routes: Routes = [
  {
    path: '',
    component: PatronesComponent
  }
];

@NgModule({
  declarations: [PatronesComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class PatronesModule { }

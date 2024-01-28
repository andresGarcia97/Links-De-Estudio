import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MalasPracticasComponent } from './malas-practicas.component';

const routes: Routes = [
  {
    path: '',
    component: MalasPracticasComponent
  }
];

@NgModule({
  declarations: [MalasPracticasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class MalasPracticasModule { }

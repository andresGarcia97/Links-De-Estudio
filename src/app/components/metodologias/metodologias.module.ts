import { NgModule } from '@angular/core';
import { MetodologiasComponent } from './metodologias.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: MetodologiasComponent
  }
];

@NgModule({
  declarations: [MetodologiasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class MetodologiasModule { }

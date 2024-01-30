import { NgModule } from '@angular/core';
import { PruebasComponent } from './pruebas.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: PruebasComponent
  }
];

@NgModule({
  declarations: [PruebasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class PruebasModule { }

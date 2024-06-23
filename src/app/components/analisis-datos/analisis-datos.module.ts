import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { AnalisisDatosComponent } from './analisis-datos.component';

const routes: Routes = [
  {
    path: '',
    component: AnalisisDatosComponent
  }
];

@NgModule({
  declarations: [AnalisisDatosComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class AnalisisDatosModule { }

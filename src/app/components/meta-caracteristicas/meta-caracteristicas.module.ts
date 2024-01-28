import { NgModule } from '@angular/core';
import { MetaCaracteristicasComponent } from './meta-caracteristicas.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: MetaCaracteristicasComponent
  }
];

@NgModule({
  declarations: [MetaCaracteristicasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class MetaCaracteristicasModule { }

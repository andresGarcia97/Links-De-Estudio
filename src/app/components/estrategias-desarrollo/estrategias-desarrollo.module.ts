import { NgModule } from '@angular/core';
import { EstrategiasDesarrolloComponent } from './estrategias-desarrollo.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: EstrategiasDesarrolloComponent
  }
];

@NgModule({
  declarations: [EstrategiasDesarrolloComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class EstrategiasDesarrolloModule { }

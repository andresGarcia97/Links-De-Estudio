import { NgModule } from '@angular/core';
import { NeuroMarketingComponent } from './neuro-marketing.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: NeuroMarketingComponent
  }
];

@NgModule({
  declarations: [NeuroMarketingComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class NeuroMarketingModule { }

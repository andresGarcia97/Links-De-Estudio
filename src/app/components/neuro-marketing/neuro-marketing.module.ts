import { NgModule } from '@angular/core';
import { NeuroMarketingComponent } from './neuro-marketing.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { NEURO_MARKETING_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: NeuroMarketingComponent,
    resolve: { [NEURO_MARKETING_PATH.propertyNameData]: contentResolver(NEURO_MARKETING_PATH.file) }
  }
];

@NgModule({
  declarations: [NeuroMarketingComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class NeuroMarketingModule { }

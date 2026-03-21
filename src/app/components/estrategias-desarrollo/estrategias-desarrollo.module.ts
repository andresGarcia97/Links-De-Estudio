import { NgModule } from '@angular/core';
import { EstrategiasDesarrolloComponent } from './estrategias-desarrollo.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ESTRATEGIAS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: EstrategiasDesarrolloComponent,
    resolve: { [ESTRATEGIAS_PATH.propertyNameData]: contentResolver(ESTRATEGIAS_PATH.file) }
  }
];

@NgModule({
  declarations: [EstrategiasDesarrolloComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class EstrategiasDesarrolloModule { }

import { NgModule } from '@angular/core';
import { AnalisisComponent } from './analisis.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ANALISIS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: AnalisisComponent,
    resolve: { [ANALISIS_PATH.propertyNameData]: contentResolver(ANALISIS_PATH.file) }
  }
];

@NgModule({
  declarations: [AnalisisComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class AnalisisModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PSICOLOGICO_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';
import { CoreModule } from '../core/core.module';
import { ConocimientosPsicologicosComponent } from './conocimientos-psicologicos.component';

const routes: Routes = [
  {
    path: '',
    component: ConocimientosPsicologicosComponent,
    resolve: { [PSICOLOGICO_PATH.propertyNameData]: contentResolver(PSICOLOGICO_PATH.file) }
  }
];

@NgModule({
  declarations: [ConocimientosPsicologicosComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ConocimientosPsicologicosModule { }

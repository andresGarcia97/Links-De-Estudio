import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { AnalisisDatosComponent } from './analisis-datos.component';
import { ANALISIS_DATA_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: AnalisisDatosComponent,
    resolve: { [ANALISIS_DATA_PATH.propertyNameData]: contentResolver(ANALISIS_DATA_PATH.file) }
  }
];

@NgModule({
  declarations: [AnalisisDatosComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class AnalisisDatosModule { }

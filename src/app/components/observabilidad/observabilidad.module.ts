import { NgModule } from '@angular/core';
import { ObservabilidadComponent } from './observabilidad.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { OBSERVABILIDAD_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: ObservabilidadComponent,
    resolve: { [OBSERVABILIDAD_PATH.propertyNameData]: contentResolver(OBSERVABILIDAD_PATH.file) }
  }
];

@NgModule({
  declarations: [ObservabilidadComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ObservabilidadModule { }

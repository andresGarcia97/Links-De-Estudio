import { NgModule } from '@angular/core';
import { CalidadComponent } from './calidad.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CALIDAD_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: CalidadComponent,
    resolve: { [CALIDAD_PATH.propertyNameData]: contentResolver(CALIDAD_PATH.file) }
  }
];

@NgModule({
  declarations: [CalidadComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class CalidadModule { }

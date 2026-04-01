import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { EJECUCION_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';
import { EjecucionComponent } from './ejecucion.component';

const routes: Routes = [
  {
    path: '',
    component: EjecucionComponent,
    resolve: { [EJECUCION_PATH.propertyNameData]: contentResolver(EJECUCION_PATH.file) }
  }
];

@NgModule({
  declarations: [EjecucionComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class EjecucionModule { }

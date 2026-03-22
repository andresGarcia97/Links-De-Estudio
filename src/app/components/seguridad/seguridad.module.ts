import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SeguridadComponent } from './seguridad.component';
import { SEGURIDAD_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: SeguridadComponent,
    resolve: { [SEGURIDAD_PATH.propertyNameData]: contentResolver(SEGURIDAD_PATH.file) }
  }
];

@NgModule({
  declarations: [SeguridadComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class SeguridadModule { }

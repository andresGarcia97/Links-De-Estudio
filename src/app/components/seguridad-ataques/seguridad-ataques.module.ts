import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SeguridadAtaquesComponent } from './seguridad-ataques.component';
import { SEGURIDAD_ATAQUES_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: SeguridadAtaquesComponent,
    resolve: { [SEGURIDAD_ATAQUES_PATH.propertyNameData]: contentResolver(SEGURIDAD_ATAQUES_PATH.file) }
  }
];

@NgModule({
  declarations: [SeguridadAtaquesComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class SeguridadAtaquesModule { }

import { NgModule } from '@angular/core';
import { MetaCaracteristicasComponent } from './meta-caracteristicas.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CARACTERISTICAS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: MetaCaracteristicasComponent,
    resolve: { [CARACTERISTICAS_PATH.propertyNameData]: contentResolver(CARACTERISTICAS_PATH.file) }
  }
];

@NgModule({
  declarations: [MetaCaracteristicasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class MetaCaracteristicasModule { }

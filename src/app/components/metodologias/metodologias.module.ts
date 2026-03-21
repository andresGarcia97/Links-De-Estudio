import { NgModule } from '@angular/core';
import { MetodologiasComponent } from './metodologias.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { METODOLOGIAS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: MetodologiasComponent,
    resolve: { [METODOLOGIAS_PATH.propertyNameData]: contentResolver(METODOLOGIAS_PATH.file) }
  }
];

@NgModule({
  declarations: [MetodologiasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class MetodologiasModule { }

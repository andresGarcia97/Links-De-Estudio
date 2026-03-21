import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MalasPracticasComponent } from './malas-practicas.component';
import { MALAS_PRACTICAS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: MalasPracticasComponent,
    resolve: { [MALAS_PRACTICAS_PATH.propertyNameData]: contentResolver(MALAS_PRACTICAS_PATH.file) }
  }
];

@NgModule({
  declarations: [MalasPracticasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class MalasPracticasModule { }

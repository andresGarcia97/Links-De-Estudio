import { NgModule } from '@angular/core';
import { BuenasPracticasComponent } from './buenas-practicas.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { BUENAS_PRACTICAS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: BuenasPracticasComponent,
    resolve: { [BUENAS_PRACTICAS_PATH.propertyNameData]: contentResolver(BUENAS_PRACTICAS_PATH.file) }
  }
];

@NgModule({
  declarations: [BuenasPracticasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class BuenasPracticasModule { }

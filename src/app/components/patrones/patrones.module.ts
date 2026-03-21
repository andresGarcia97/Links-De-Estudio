import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PatronesComponent } from './patrones.component';
import { PATRONES_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: PatronesComponent,
    resolve: { [PATRONES_PATH.propertyNameData]: contentResolver(PATRONES_PATH.file) }
  }
];

@NgModule({
  declarations: [PatronesComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class PatronesModule { }

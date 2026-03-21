import { NgModule } from '@angular/core';
import { PruebasComponent } from './pruebas.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { TESTING_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: PruebasComponent,
    resolve: { [TESTING_PATH.propertyNameData]: contentResolver(TESTING_PATH.file) }
  }
];

@NgModule({
  declarations: [PruebasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class PruebasModule { }

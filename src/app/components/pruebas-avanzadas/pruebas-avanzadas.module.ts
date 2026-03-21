import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PruebasAvanzadasComponent } from './pruebas-avanzadas.component';
import { TESTING_ADVANCED_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: PruebasAvanzadasComponent,
    resolve: { [TESTING_ADVANCED_PATH.propertyNameData]: contentResolver(TESTING_ADVANCED_PATH.file) }
  }
];

@NgModule({
  declarations: [PruebasAvanzadasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class PruebasAvanzadasModule { }

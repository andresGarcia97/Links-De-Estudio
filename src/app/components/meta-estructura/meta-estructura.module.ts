import { NgModule } from '@angular/core';
import { MetaEstructuraComponent } from './meta-estructura.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ESTRUCTURAS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: MetaEstructuraComponent,
    resolve: { [ESTRUCTURAS_PATH.propertyNameData]: contentResolver(ESTRUCTURAS_PATH.file) }
  }
];

@NgModule({
  declarations: [MetaEstructuraComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class MetaEstructuraModule { }

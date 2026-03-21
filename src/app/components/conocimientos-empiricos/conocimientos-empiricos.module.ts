import { NgModule } from '@angular/core';
import { ConocimientosEmpiricosComponent } from './conocimientos-empiricos.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { EMPIRICO_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: ConocimientosEmpiricosComponent,
    resolve: { [EMPIRICO_PATH.propertyNameData]: contentResolver(EMPIRICO_PATH.file) }
  }
];

@NgModule({
  declarations: [ConocimientosEmpiricosComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ConocimientosEmpiricosModule { }

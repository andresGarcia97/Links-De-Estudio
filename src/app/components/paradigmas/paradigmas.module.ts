import { NgModule } from '@angular/core';
import { ParadigmasComponent } from './paradigmas.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PARADIGMAS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: ParadigmasComponent,
    resolve: { [PARADIGMAS_PATH.propertyNameData]: contentResolver(PARADIGMAS_PATH.file) }
  }
];

@NgModule({
  declarations: [ParadigmasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ParadigmasModule { }

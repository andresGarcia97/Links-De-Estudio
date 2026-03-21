import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { RefactorizacionComponent } from './refactorizacion.component';
import { REFACTORING_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: RefactorizacionComponent,
    resolve: { [REFACTORING_PATH.propertyNameData]: contentResolver(REFACTORING_PATH.file) }
  }
];

@NgModule({
  declarations: [RefactorizacionComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class RefactorizacionModule { }

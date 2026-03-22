import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CompilacionComponent } from './compilacion.component';
import { COMPILACION_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: CompilacionComponent,
    resolve: { [COMPILACION_PATH.propertyNameData]: contentResolver(COMPILACION_PATH.file) }
  }
];

@NgModule({
  declarations: [CompilacionComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class CompilacionModule { }

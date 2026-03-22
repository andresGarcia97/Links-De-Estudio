import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ContenedoresComponent } from './contenedores.component';
import { CONTENEDORES_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: ContenedoresComponent,
    resolve: { [CONTENEDORES_PATH.propertyNameData]: contentResolver(CONTENEDORES_PATH.file) }
  }
];

@NgModule({
  declarations: [ContenedoresComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ContenedoresModule { }

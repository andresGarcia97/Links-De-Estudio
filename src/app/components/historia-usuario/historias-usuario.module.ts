import { NgModule } from '@angular/core';
import { HistoriaUsuarioComponent } from './historia-usuario.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { USER_HISTORIES_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: HistoriaUsuarioComponent,
    resolve: { [USER_HISTORIES_PATH.propertyNameData]: contentResolver(USER_HISTORIES_PATH.file) }
  }
];

@NgModule({
  declarations: [HistoriaUsuarioComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class HistoriasUsuarioModule { }

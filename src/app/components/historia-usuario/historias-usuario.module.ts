import { NgModule } from '@angular/core';
import { HistoriaUsuarioComponent } from './historia-usuario.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: HistoriaUsuarioComponent
  }
];

@NgModule({
  declarations: [HistoriaUsuarioComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class HistoriasUsuarioModule { }

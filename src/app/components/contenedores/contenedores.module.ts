import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ContenedoresComponent } from './contenedores.component';

const routes: Routes = [
  {
    path: '',
    component: ContenedoresComponent
  }
];

@NgModule({
  declarations: [ContenedoresComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ContenedoresModule { }

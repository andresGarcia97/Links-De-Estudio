import { NgModule } from '@angular/core';
import { ArquitecturasComponent } from './arquitecturas.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: ArquitecturasComponent
  }
];

@NgModule({
  declarations: [ArquitecturasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ArquitecturasModule { }

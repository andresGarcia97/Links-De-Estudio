import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PrincipiosComponent } from './principios.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipiosComponent
  }
];

@NgModule({
  declarations: [PrincipiosComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class PrincipiosModule { }

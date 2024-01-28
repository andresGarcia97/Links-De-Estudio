import { NgModule } from '@angular/core';
import { MetaEstructuraComponent } from './meta-estructura.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: MetaEstructuraComponent
  }
];

@NgModule({
  declarations: [MetaEstructuraComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class MetaEstructuraModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { OtrosComponent } from './otros.component';

const routes: Routes = [
  {
    path: '',
    component: OtrosComponent
  }
];

@NgModule({
  declarations: [OtrosComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class OtrosModule { }

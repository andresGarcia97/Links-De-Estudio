import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent
  }
];

@NgModule({
  declarations: [WebComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class WebModule { }

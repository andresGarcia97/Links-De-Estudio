import { NgModule } from '@angular/core';
import { ApisTermsComponent } from './apis-terms.component';
import { CoreModule } from '../core/core.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ApisTermsComponent
  }
];

@NgModule({
  declarations: [ApisTermsComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ApisTermsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ApisTermsComponent } from './apis-terms.component';

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

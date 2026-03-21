import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ApisTermsComponent } from './apis-terms.component';
import { APIS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: ApisTermsComponent,
    resolve: { [APIS_PATH.propertyNameData]: contentResolver(APIS_PATH.file) }
  }
];

@NgModule({
  declarations: [ApisTermsComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ApisTermsModule { }

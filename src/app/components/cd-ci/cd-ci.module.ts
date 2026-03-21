import { NgModule } from '@angular/core';
import { CDCIComponent } from './cd-ci.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CICD_INFRAESTRUCTURE_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: CDCIComponent,
    resolve: { [CICD_INFRAESTRUCTURE_PATH.propertyNameData]: contentResolver(CICD_INFRAESTRUCTURE_PATH.file) }
  }
];

@NgModule({
  declarations: [CDCIComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class CdCiModule { }

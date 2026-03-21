import { NgModule } from '@angular/core';
import { NubeComponent } from './nube.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { NUBE_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: NubeComponent,
    resolve: { [NUBE_PATH.propertyNameData]: contentResolver(NUBE_PATH.file) }
  }
];

@NgModule({
  declarations: [NubeComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class NubeModule { }

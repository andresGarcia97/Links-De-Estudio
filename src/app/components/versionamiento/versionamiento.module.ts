import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { VersionamientoComponent } from './versionamiento.component';
import { VERSIONAMIENTO_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: VersionamientoComponent,
    resolve: { [VERSIONAMIENTO_PATH.propertyNameData]: contentResolver(VERSIONAMIENTO_PATH.file) }
  }
];

@NgModule({
  declarations: [VersionamientoComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class VersionamientoModule { }

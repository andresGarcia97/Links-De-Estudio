import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { BuildComponent } from './build.component';
import { BUILD_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: BuildComponent,
    resolve: { [BUILD_PATH.propertyNameData]: contentResolver(BUILD_PATH.file) }
  }
];

@NgModule({
  declarations: [BuildComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class BuildModule { }

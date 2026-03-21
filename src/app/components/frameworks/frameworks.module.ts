import { NgModule } from '@angular/core';
import { FrameworksComponent } from './frameworks.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { FRAMEWORKS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: FrameworksComponent,
    resolve: { [FRAMEWORKS_PATH.propertyNameData]: contentResolver(FRAMEWORKS_PATH.file) }
  }
];

@NgModule({
  declarations: [FrameworksComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class FrameworksModule { }

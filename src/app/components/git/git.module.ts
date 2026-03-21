import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { GitComponent } from './git.component';
import { GIT_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: GitComponent,
    resolve: { [GIT_PATH.propertyNameData]: contentResolver(GIT_PATH.file) }
  }
];

@NgModule({
  declarations: [GitComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class GitModule { }

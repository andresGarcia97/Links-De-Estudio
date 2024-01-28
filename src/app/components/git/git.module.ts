import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { GitComponent } from './git.component';

const routes: Routes = [
  {
    path: '',
    component: GitComponent
  }
];

@NgModule({
  declarations: [GitComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class GitModule { }

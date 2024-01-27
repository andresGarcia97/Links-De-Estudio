import { NgModule } from '@angular/core';
import { FrameworksComponent } from './frameworks.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: FrameworksComponent
  }
];

@NgModule({
  declarations: [FrameworksComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class FrameworksModule { }

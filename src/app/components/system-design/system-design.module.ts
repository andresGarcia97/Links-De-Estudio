import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SystemDesignComponent } from './system-design.component';

const routes: Routes = [
  {
    path: '',
    component: SystemDesignComponent
  }
];

@NgModule({
  declarations: [SystemDesignComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class SystemsDesignModule { }

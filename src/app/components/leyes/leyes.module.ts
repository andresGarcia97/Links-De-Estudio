import { NgModule } from '@angular/core';
import { LeyesComponent } from './leyes.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: LeyesComponent
  }
];

@NgModule({
  declarations: [LeyesComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class LeyesModule { }

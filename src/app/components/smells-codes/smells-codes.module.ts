import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SmellsCodesComponent } from './smells-codes.component';

const routes: Routes = [
  {
    path: '',
    component: SmellsCodesComponent
  }
];

@NgModule({
  declarations: [SmellsCodesComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class SmellsCodesModule { }

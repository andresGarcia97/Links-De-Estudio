import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { UmlComponent } from './uml.component';

const routes: Routes = [
  {
    path: '',
    component: UmlComponent
  }
];

@NgModule({
  declarations: [UmlComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class UMLModule { }

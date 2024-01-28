import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PersonasComponent } from './personas.component';

const routes: Routes = [
  {
    path: '',
    component: PersonasComponent
  }
];

@NgModule({
  declarations: [PersonasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class PersonasModule { }

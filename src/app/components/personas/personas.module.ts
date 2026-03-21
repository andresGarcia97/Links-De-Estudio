import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PersonasComponent } from './personas.component';
import { PEOPLE_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: PersonasComponent,
    resolve: { [PEOPLE_PATH.propertyNameData]: contentResolver(PEOPLE_PATH.file) }
  }
];

@NgModule({
  declarations: [PersonasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class PersonasModule { }

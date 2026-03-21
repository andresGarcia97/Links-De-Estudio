import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { UmlComponent } from './uml.component';
import { UML_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: UmlComponent,
    resolve: { [UML_PATH.propertyNameData]: contentResolver(UML_PATH.file) }
  }
];

@NgModule({
  declarations: [UmlComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class UMLModule { }

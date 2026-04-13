import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PATRONES_ADVANCED_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';
import { PatronesAdvancedComponent } from './patrones-advanced.component';

const routes: Routes = [
  {
    path: '',
    component: PatronesAdvancedComponent,
    resolve: { [PATRONES_ADVANCED_PATH.propertyNameData]: contentResolver(PATRONES_ADVANCED_PATH.file) }
  }
];

@NgModule({
  declarations: [PatronesAdvancedComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class PatronesAdvancedModule { }

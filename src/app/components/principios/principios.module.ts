import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PrincipiosComponent } from './principios.component';
import { PRINCIPIOS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: PrincipiosComponent,
    resolve: { [PRINCIPIOS_PATH.propertyNameData]: contentResolver(PRINCIPIOS_PATH.file) }
  }
];

@NgModule({
  declarations: [PrincipiosComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class PrincipiosModule { }

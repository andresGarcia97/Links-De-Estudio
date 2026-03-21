import { NgModule } from '@angular/core';
import { AgilesComponent } from './agiles.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { AGILES_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: AgilesComponent,
    resolve: { [AGILES_PATH.propertyNameData]: contentResolver(AGILES_PATH.file) }
  }
];

@NgModule({
  declarations: [AgilesComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class AgilesModule { }

import { NgModule } from '@angular/core';
import { PooComponent } from './poo.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { POO_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: PooComponent,
    resolve: { [POO_PATH.propertyNameData]: contentResolver(POO_PATH.file) }
  }
];

@NgModule({
  declarations: [PooComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class POOModule { }

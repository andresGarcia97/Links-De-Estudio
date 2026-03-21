import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MicroServicesComponent } from './micro-services.component';
import { MICROSERVICES_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: MicroServicesComponent,
    resolve: { [MICROSERVICES_PATH.propertyNameData]: contentResolver(MICROSERVICES_PATH.file) }
  }
];

@NgModule({
  declarations: [MicroServicesComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class MicroServicesModule { }

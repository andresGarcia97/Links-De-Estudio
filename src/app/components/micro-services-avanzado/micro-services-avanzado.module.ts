import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MicroServicesAvanzadoComponent } from './micro-services-avanzado.component';
import { MICROSERVICES_ADVANCED_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: MicroServicesAvanzadoComponent,
    resolve: { [MICROSERVICES_ADVANCED_PATH.propertyNameData]: contentResolver(MICROSERVICES_ADVANCED_PATH.file) }
  }
];

@NgModule({
  declarations: [MicroServicesAvanzadoComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class MicroServicesAvanzadoModule { }

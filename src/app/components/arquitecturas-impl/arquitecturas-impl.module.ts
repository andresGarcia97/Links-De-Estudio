import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ARQUITECTURAS_IMPL_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';
import { ArquitecturasImplComponent } from './arquitecturas-impl.component';

const routes: Routes = [
  {
    path: '',
    component: ArquitecturasImplComponent,
    resolve: { [ARQUITECTURAS_IMPL_PATH.propertyNameData]: contentResolver(ARQUITECTURAS_IMPL_PATH.file) }
  }
];

@NgModule({
  declarations: [ArquitecturasImplComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ArquitecturasImplModule { }

import { NgModule } from '@angular/core';
import { ArquitecturasComponent } from './arquitecturas.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ARQUITECTURAS_PATH } from 'src/app/models/relationsSummary';
import { contentResolver } from '../core/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: ArquitecturasComponent,
    resolve: { [ARQUITECTURAS_PATH.propertyNameData]: contentResolver(ARQUITECTURAS_PATH.file) }
  }
];

@NgModule({
  declarations: [ArquitecturasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class ArquitecturasModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PruebasAvanzadasComponent } from './pruebas-avanzadas.component';

const routes: Routes = [
  {
    path: '',
    component: PruebasAvanzadasComponent
  }
];

@NgModule({
  declarations: [PruebasAvanzadasComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule]
})
export class PruebasAvanzadasModule { }

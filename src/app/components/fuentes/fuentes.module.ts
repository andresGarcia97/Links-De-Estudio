import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuenteComponent } from './fuente/fuente.component';
import { FuentesComponent } from './fuentes.component';

const routes: Routes = [
  {
    path: '',
    component: FuentesComponent
  }
];

@NgModule({
  declarations: [FuentesComponent, FuenteComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule, FuenteComponent]
})
export class FuentesModule { }

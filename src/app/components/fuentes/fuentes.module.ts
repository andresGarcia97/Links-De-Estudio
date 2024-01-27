import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FuentesComponent } from './fuentes.component';
import { FuenteComponent } from './fuente/fuente.component';
import { Routes, RouterModule } from '@angular/router';

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

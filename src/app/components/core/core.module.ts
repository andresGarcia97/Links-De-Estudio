import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FuenteComponent } from './fuente/fuente.component';
import { ReferenciaComponent } from './referencia/referencia.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    FuenteComponent,
    ReferenciaComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FuenteComponent,
    ReferenciaComponent,
    SectionComponent
  ]
})

export class CoreModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReferenciaComponent } from './referencia/referencia.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    ReferenciaComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReferenciaComponent,
    SectionComponent
  ]
})

export class CoreModule { }

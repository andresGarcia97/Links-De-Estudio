import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReferenciaComponent } from './referencia/referencia.component';
import { SectionComponent } from './section/section.component';
import { ExtraInfoComponent } from './extra-info/extra-info.component';

@NgModule({
  declarations: [
    ReferenciaComponent,
    SectionComponent,
    ExtraInfoComponent
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

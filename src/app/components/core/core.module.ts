import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonBeforeComponent } from './button-before/button-before.component';
import { ButtonNextComponent } from './button-next/button-next.component';
import { ButtonComponent } from './button/button.component';
import { FuenteComponent } from './fuente/fuente.component';
import { MiniTerminalComponent } from './mini-terminal/mini-terminal.component';
import { ReferenciaComponent } from './referencia/referencia.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonBeforeComponent,
    ButtonNextComponent,
    FuenteComponent,
    MiniTerminalComponent,
    ReferenciaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ButtonBeforeComponent,
    ButtonNextComponent,
    FuenteComponent,
    MiniTerminalComponent,
    ReferenciaComponent
  ]
})

export class CoreModule { }

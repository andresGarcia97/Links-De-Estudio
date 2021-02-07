import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-referencia',
  templateUrl: './referencia.component.html'
})
export class ReferenciaComponent {

  @Input() referencia = '';

}

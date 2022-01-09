import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/content';

@Component({
  selector: 'app-mini-terminal',
  templateUrl: './mini-terminal.component.html'
})
export class MiniTerminalComponent {

  @Input() referencia = '';
  @Input() titulo = '';
  @Input() item!: Item;

}

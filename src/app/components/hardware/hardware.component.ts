import { Component } from '@angular/core';
import { HARDWARE } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html'
})
export class HardwareComponent extends LinkReferencia {

  items = HARDWARE;

}

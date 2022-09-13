import { Component } from '@angular/core';
import { HARDWARE } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html'
})
export class HardwareComponent extends LinkReferencia {

  items = HARDWARE;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['escalamiento', 'Escalamiento'],
    ['cli', 'CLI'],
    ['virtualizacion', 'virtualizacion'],
    ['nubeVSvirtualizacion', 'Nube VS VM'],
    ['rendering', 'Rendering'],
    ['modelOSI', 'Modelo OSI'],
    ['monitoreo', 'Monitoreo'],
    ['vmVsContainers', 'VM VS Contenedores'],
  ]);

}

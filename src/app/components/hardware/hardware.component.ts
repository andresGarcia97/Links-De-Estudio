import { Component } from '@angular/core';
import { HARDWARE } from 'src/app/models/content/content1';
import { HARDWARE_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html'
})
export class HardwareComponent {

  items = HARDWARE;

  components = new Map([ ...HARDWARE_REF ]);

  tittles = new Map<string, string>([
    ['escalamiento', 'Escalamiento'],
    ['cli', 'CLI'],
    ['virtualizacion', 'virtualizacion'],
    ['nubeVSvirtualizacion', 'Nube VS VM'],
    ['rendering', 'Rendering'],
    ['modelOSI', 'Modelo OSI'],
    ['monitoreo', 'Monitoreo'],
    ['vmVsContainers', 'VM VS Contenedores'],
    ['falseSharing', 'False Sharing'],
  ]);

}

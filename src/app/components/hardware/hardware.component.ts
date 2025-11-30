import { Component, OnInit } from '@angular/core';
import { HARDWARE } from 'src/app/models/content/content1';
import { CI_CD_KEY, COMPILACION_KEY, HARDWARE_REF, LEYES_KEY, LinkReferencia, META_ESTRUCTURAS_KEY, NUBE_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-hardware',
    templateUrl: './hardware.component.html',
    standalone: false
})
export class HardwareComponent implements OnInit {

  items = HARDWARE;

  components = HARDWARE_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...HARDWARE_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(COMPILACION_KEY, routes.get(COMPILACION_KEY)!);
    this.relatedSections.set(CI_CD_KEY,       routes.get(CI_CD_KEY)!);
    this.relatedSections.set(LEYES_KEY,       routes.get(LEYES_KEY)!);
    this.relatedSections.set(NUBE_KEY,        routes.get(NUBE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      META_ESTRUCTURAS_KEY, routes.get(META_ESTRUCTURAS_KEY)!,
      CI_CD_KEY,            routes.get(CI_CD_KEY)!
    );
  }

}

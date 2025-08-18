import { Component, OnInit } from '@angular/core';
import { HARDWARE } from 'src/app/models/content/content1';
import { CD_CI_KEY, COMPILACION_KEY, HARDWARE_REF, LinkReferencia, META_ESTRUCTURAS_KEY, NUBE_KEY }
from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html'
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
    this.relatedSections.set(CD_CI_KEY,       routes.get(CD_CI_KEY)!);
    this.relatedSections.set(NUBE_KEY,        routes.get(NUBE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      META_ESTRUCTURAS_KEY, routes.get(META_ESTRUCTURAS_KEY)!,
      CD_CI_KEY,            routes.get(CD_CI_KEY)!
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkReferencia, SECURITY_KEY, HARDWARE_KEY, CI_CD_KEY, NUBE_KEY, EJECUCION_REF, COMPILACION_KEY, VERSIONAMIENTO_KEY }
  from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { EJECUCION_PATH } from 'src/app/models/relationsSummary';

@Component({
  selector: 'app-ejecucion',
  templateUrl: './ejecucion.component.html',
  standalone: false 
})
export class EjecucionComponent implements OnInit {

  items: Item[] = [];

  components = EJECUCION_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...EJECUCION_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[EJECUCION_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(COMPILACION_KEY, routes.get(COMPILACION_KEY)!);
    this.relatedSections.set(SECURITY_KEY,    routes.get(SECURITY_KEY)!);
    this.relatedSections.set(HARDWARE_KEY,    routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(CI_CD_KEY,       routes.get(CI_CD_KEY)!);
    this.relatedSections.set(NUBE_KEY,        routes.get(NUBE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      COMPILACION_KEY,    routes.get(COMPILACION_KEY)!,
      VERSIONAMIENTO_KEY, routes.get(VERSIONAMIENTO_KEY)!
    );
  }

}

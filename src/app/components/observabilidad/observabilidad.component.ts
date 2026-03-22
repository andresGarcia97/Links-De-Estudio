import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OBSERVABILIDAD_REF, LinkReferencia, NUBE_KEY, CALIDAD_KEY, CI_CD_KEY, APIS_KEY, HARDWARE_KEY }
    from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { OBSERVABILIDAD_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-observabilidad',
    templateUrl: './observabilidad.component.html',
    standalone: false
})
export class ObservabilidadComponent implements OnInit {

    items: Item[] = [];

    components = OBSERVABILIDAD_REF;

    itemStart = '';

    relatedSections = new Map<string, string>([]);

    tittles = new Map([ ...OBSERVABILIDAD_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

    previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[OBSERVABILIDAD_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(HARDWARE_KEY, routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(CALIDAD_KEY,  routes.get(CALIDAD_KEY)!);
    this.relatedSections.set(CI_CD_KEY,    routes.get(CI_CD_KEY)!);
    this.relatedSections.set(NUBE_KEY,     routes.get(NUBE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
        NUBE_KEY, routes.get(NUBE_KEY)!,
        APIS_KEY, routes.get(APIS_KEY)!
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { OBSERVABILIDAD } from 'src/app/models/content/content8';
import { OBSERVABILIDAD_REF, LinkReferencia, NUBE_KEY, CALIDAD_KEY, CI_CD_KEY, APIS_KEY, HARDWARE_KEY }
    from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-observabilidad',
    templateUrl: './observabilidad.component.html',
    standalone: false
})
export class ObservabilidadComponent implements OnInit {

    items = OBSERVABILIDAD;

    components = OBSERVABILIDAD_REF;

    itemStart = '';

    relatedSections = new Map<string, string>([]);

    tittles = new Map([ ...OBSERVABILIDAD_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

    previousAndNextSection!: PreviousAndNextSection;

    ngOnInit(): void {
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

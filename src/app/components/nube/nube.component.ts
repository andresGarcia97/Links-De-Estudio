import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIS_KEY, CI_CD_KEY, CONTENEDORES_KEY, LinkReferencia, NUBE_REF, OBSERVABILIDAD_KEY, SECURITY_KEY, WEB_KEY }
  from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { NUBE_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-nube',
    templateUrl: './nube.component.html',
    standalone: false
})
export class NubeComponent implements OnInit {

  items: Item[] = [];

  components = NUBE_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...NUBE_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[NUBE_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONTENEDORES_KEY, routes.get(CONTENEDORES_KEY)!);
    this.relatedSections.set(SECURITY_KEY,     routes.get(SECURITY_KEY)!);
    this.relatedSections.set(CI_CD_KEY,        routes.get(CI_CD_KEY)!);
    this.relatedSections.set(APIS_KEY,         routes.get(APIS_KEY)!);
    this.relatedSections.set(WEB_KEY,          routes.get(WEB_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      SECURITY_KEY,       routes.get(SECURITY_KEY)!,
      OBSERVABILIDAD_KEY, routes.get(OBSERVABILIDAD_KEY)!
    );
  }

}

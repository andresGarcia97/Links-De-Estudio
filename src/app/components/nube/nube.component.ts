import { Component, OnInit } from '@angular/core';
import { NUBE } from 'src/app/models/content/content5';
import { APIS_KEY, CI_CD_KEY, CONTENEDORES_KEY, LinkReferencia, NUBE_REF, SECURITY_KEY, WEB_KEY } from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
  selector: 'app-nube',
  templateUrl: './nube.component.html'
})
export class NubeComponent implements OnInit {

  items = NUBE;

  components = NUBE_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...NUBE_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(CONTENEDORES_KEY, routes.get(CONTENEDORES_KEY)!);
    this.relatedSections.set(SECURITY_KEY,     routes.get(SECURITY_KEY)!);
    this.relatedSections.set(CI_CD_KEY,        routes.get(CI_CD_KEY)!);
    this.relatedSections.set(APIS_KEY,         routes.get(APIS_KEY)!);
    this.relatedSections.set(WEB_KEY,          routes.get(WEB_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      SECURITY_KEY, routes.get(SECURITY_KEY)!,
      APIS_KEY,     routes.get(APIS_KEY)!
    );
  }

}

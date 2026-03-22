import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CI_CD_KEY, CONTAINERS, GIT_KEY, HARDWARE_KEY, LinkReferencia, NUBE_KEY, SECURITY_KEY, WEB_KEY }
from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { CONTENEDORES_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-docker',
    templateUrl: './contenedores.component.html',
    standalone: false
})
export class ContenedoresComponent implements OnInit {

  items: Item[] = [];

  components = CONTAINERS;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...CONTAINERS ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[CONTENEDORES_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(SECURITY_KEY, routes.get(SECURITY_KEY)!);
    this.relatedSections.set(HARDWARE_KEY, routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(CI_CD_KEY,    routes.get(CI_CD_KEY)!);
    this.relatedSections.set(NUBE_KEY,     routes.get(NUBE_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      GIT_KEY, routes.get(GIT_KEY)!,
      WEB_KEY, routes.get(WEB_KEY)!
    );
  }

}

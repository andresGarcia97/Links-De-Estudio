import { Component, OnInit } from '@angular/core';
import { CONTENEDORES } from 'src/app/models/content/content1';
import { CD_CI_KEY, CONTAINERS, HARDWARE_KEY, LinkReferencia, NUBE_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-docker',
  templateUrl: './contenedores.component.html'
})
export class ContenedoresComponent implements OnInit {

  items = CONTENEDORES;

  components = CONTAINERS;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...CONTAINERS ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(HARDWARE_KEY,  routes.get(HARDWARE_KEY)!);
    this.relatedSections.set(CD_CI_KEY,     routes.get(CD_CI_KEY)!);
    this.relatedSections.set(NUBE_KEY,      routes.get(NUBE_KEY)!);
  }

}

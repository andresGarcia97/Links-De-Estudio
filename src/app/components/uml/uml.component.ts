import { Component, OnInit } from '@angular/core';
import { UML } from 'src/app/models/content/content3';
import { ANALISIS_KEY, GIT_KEY, LinkReferencia, UML_REF, VERSIONAMIENTO_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-uml',
  templateUrl: './uml.component.html'
})
export class UmlComponent implements OnInit {

  items = UML;

  components = UML_REF;
  
  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...UML_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(VERSIONAMIENTO_KEY, routes.get(VERSIONAMIENTO_KEY)!);
    this.relatedSections.set(ANALISIS_KEY,       routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(GIT_KEY,            routes.get(GIT_KEY)!);
  }

}

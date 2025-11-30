import { Component, OnInit } from '@angular/core';
import { GIT } from 'src/app/models/content/content6';
import { CONTENEDORES_KEY, GIT_REF, LinkReferencia, VERSIONAMIENTO_KEY } from 'src/app/models/linkReferencia';
import { PreviousAndNextSection } from 'src/app/models/models';

@Component({
    selector: 'app-git',
    templateUrl: './git.component.html',
    standalone: false
})
export class GitComponent implements OnInit {

  items = GIT;

  components = GIT_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...GIT_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(VERSIONAMIENTO_KEY, routes.get(VERSIONAMIENTO_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      VERSIONAMIENTO_KEY, routes.get(VERSIONAMIENTO_KEY)!,
      CONTENEDORES_KEY,   routes.get(CONTENEDORES_KEY)!      
    );
  }

}

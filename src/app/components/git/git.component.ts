import { Component, OnInit } from '@angular/core';
import { GIT } from 'src/app/models/content/content2';
import { GIT_REF, LinkReferencia, VERSIONAMIENTO_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html'
})
export class GitComponent implements OnInit {

  items = GIT;

  components = GIT_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...GIT_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(VERSIONAMIENTO_KEY,  routes.get(VERSIONAMIENTO_KEY)!);
  }

}

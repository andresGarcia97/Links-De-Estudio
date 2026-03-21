import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONTENEDORES_KEY, GIT_REF, LinkReferencia, VERSIONAMIENTO_KEY } from 'src/app/models/linkReferencia';
import { Item, PreviousAndNextSection } from 'src/app/models/models';
import { GIT_PATH } from 'src/app/models/relationsSummary';

@Component({
    selector: 'app-git',
    templateUrl: './git.component.html',
    standalone: false
})
export class GitComponent implements OnInit {

  items: Item[] = [];

  components = GIT_REF;

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map([ ...GIT_REF ].map(([key, { tittleShort }]) => [key, tittleShort]));

  previousAndNextSection!: PreviousAndNextSection;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data[GIT_PATH.propertyNameData];
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(VERSIONAMIENTO_KEY, routes.get(VERSIONAMIENTO_KEY)!);
    this.previousAndNextSection = new PreviousAndNextSection(
      VERSIONAMIENTO_KEY, routes.get(VERSIONAMIENTO_KEY)!,
      CONTENEDORES_KEY,   routes.get(CONTENEDORES_KEY)!      
    );
  }

}

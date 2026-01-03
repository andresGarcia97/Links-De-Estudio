import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LAST_ITEM, LAST_UPDATE, LinkReferencia } from 'src/app/models/linkReferencia';

const references = new LinkReferencia()

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true
})
export class HomeComponent {

  constructor(private router: Router) { }

  public routeTo(component: string): void {
    this.router.navigateByUrl(`/${component}`)
  }

  public routeToLastItem(): void {
    const newItem = LAST_ITEM;
    const section = references.components.get(newItem)?.component!;
    this.router.navigateByUrl(`/${references.routesAndSections.get(section)}`, { state: { newItem } })
  }

  public routeToLastUpdate(): void {
    const lastUpdate = LAST_UPDATE;
    const section = references.components.get(lastUpdate)?.component!;
    this.router.navigateByUrl(`/${references.routesAndSections.get(section)}`, { state: { newItem:lastUpdate } })
  }

}

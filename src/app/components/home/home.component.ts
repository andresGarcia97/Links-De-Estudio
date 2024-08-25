import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HARDWARE_UTF8, LinkReferencia } from 'src/app/models/linkReferencia';

const references = new LinkReferencia()

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private router: Router) { }

  public routeTo(component: string): void {
    this.router.navigateByUrl(`/${component}`)
  }

  public routeToLastItem(): void {
    const newItem = HARDWARE_UTF8;
    const section = references.components.get(newItem)?.component!;
    this.router.navigateByUrl(`/${references.routesAndSections.get(section)}`, { state: { newItem } })
  }

}

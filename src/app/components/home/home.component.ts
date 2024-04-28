import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UML_KEY, LinkReferencia } from 'src/app/models/linkReferencia';

const route = new LinkReferencia().routesAndSections.get(UML_KEY);

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
    const newItem = 'c4Model';
    this.router.navigateByUrl(`/${route}`, { state: { newItem } })
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CARACTERISTICAS_KEY, LinkReferencia } from 'src/app/models/linkReferencia';

const route = new LinkReferencia().routesAndSections.get(CARACTERISTICAS_KEY);

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
    const newItem = 'memorySafety';
    this.router.navigateByUrl(`/${route}`, { state: { newItem } })
  }

}

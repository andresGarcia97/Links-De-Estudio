import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkReferencia, BUENAS_PRACTICAS_KEY } from 'src/app/models/linkReferencia';

const route = new LinkReferencia().routesAndSections.get(BUENAS_PRACTICAS_KEY);

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
    const newItem = 'goodHabits';
    this.router.navigateByUrl(`/${route}`, { state: { newItem } })
  }

}

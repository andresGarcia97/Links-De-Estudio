import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkReferencia, CD_CI_KEY } from 'src/app/models/linkReferencia';

const route = new LinkReferencia().routesAndSections.get(CD_CI_KEY);

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
    const newItem = 'pipelines';
    this.router.navigateByUrl(`/${route}`, { state: { newItem } })
  }

}

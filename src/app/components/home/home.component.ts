import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkReferencia, CD_CI_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private router: Router) { }

  private route = new LinkReferencia().routesAndSections.get(CD_CI_KEY);
  private item = 'industrialDevops';

  public routeTo(component: string): void {
    this.router.navigateByUrl(`/${component}`)
  }

  public routeToLastItem(): void {
    const newItem = this.item;
    this.router.navigateByUrl(`/${this.route}`, { state: { newItem } })
  }

}

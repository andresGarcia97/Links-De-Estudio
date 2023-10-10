import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DATA_BASES_ADVANCED_KEY, LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private router: Router) { }

  private route = new LinkReferencia().routesAndSections.get(DATA_BASES_ADVANCED_KEY);
  private item = 'MVCC';

  public routeTo(component: string): void {
    this.router.navigateByUrl(`/${component}`)
  }

  public routeToLastItem(): void {
    const newItem = this.item;
    this.router.navigateByUrl(`/${this.route}`, { state: { newItem } })
  }

}

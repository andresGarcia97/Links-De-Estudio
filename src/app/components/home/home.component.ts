import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ANALISIS_DATA_BATCH_VS_STREAM, LinkReferencia } from 'src/app/models/linkReferencia';

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
    const newItem = ANALISIS_DATA_BATCH_VS_STREAM;
    const section = references.components.get(newItem)?.component!;
    this.router.navigateByUrl(`/${references.routesAndSections.get(section)}`, { state: { newItem } })
  }

}

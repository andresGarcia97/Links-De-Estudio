import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LinkReferencia } from 'src/app/models/linkReferencia';
import { Referencia } from 'src/app/models/models';

const references = new LinkReferencia();

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html'
})
export class ExtraInfoComponent implements OnChanges {

  @Input() dateUpdate = '';
  @Input() dateRead = '';
  @Input() relatedItems: string[] = [];
  @Input() selection = '';

  components: Map<string, Referencia> = new Map<string, Referencia>([]);

  constructor(private router: Router) { }

  ngOnChanges(): void {

    this.components.clear();

    if (this.selection !== '' && this.relatedItems.length > 0) {
      this.relatedItems.forEach(relatedItem => this.components.set(relatedItem, references.components.get(relatedItem)!));
      return;
    }

    this.components.clear();
  }

  public routeToSelectedItem(component: string, newItem: string): void {
    const route = references.routesAndSections.get(component);
    this.router.navigateByUrl(`/${route}`, { state: { newItem } })
  }

}

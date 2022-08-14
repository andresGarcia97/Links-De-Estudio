import { Component } from '@angular/core';
import { FRAMEWORKS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html'
})
export class FrameworksComponent extends LinkReferencia {

  items = FRAMEWORKS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['frameworks', '¿ Que son ?'],
    ['ioc', 'IoC'],
    ['iod', 'IoD'],
    ['scafolding', 'Scaffolding'],
  ]);

}

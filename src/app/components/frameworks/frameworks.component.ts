import { Component } from '@angular/core';
import { FRAMEWORKS } from 'src/app/models/content/content1';
import { FRAMEWORKS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html'
})
export class FrameworksComponent {

  items = FRAMEWORKS;

  components = new Map([ ...FRAMEWORKS_REF ]);

  tittles = new Map<string, string>([
    ['frameworks', '¿ Que son ?'],
    ['ioc', 'IoC'],
    ['iod', 'IoD'],
    ['scafolding', 'Scaffolding'],
  ]);

}

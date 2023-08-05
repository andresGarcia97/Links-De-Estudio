import { Component, OnInit } from '@angular/core';
import { FRAMEWORKS } from 'src/app/models/content/content1';
import { FRAMEWORKS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html'
})
export class FrameworksComponent implements OnInit {

  items = FRAMEWORKS;

  components = new Map([ ...FRAMEWORKS_REF ]);

  itemStart = '';

  tittles = new Map<string, string>([
    ['frameworks', '¿ Que son ?'],
    ['ioc', 'IoC'],
    ['iod', 'IoD'],
    ['scafolding', 'Scaffolding'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }
  
}

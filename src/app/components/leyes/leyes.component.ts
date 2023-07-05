import { Component, OnInit } from '@angular/core';
import { LEYES } from 'src/app/models/content/content2';
import { LEYES_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-leyes',
  templateUrl: './leyes.component.html'
})
export class LeyesComponent implements OnInit {

  items = LEYES;

  components = new Map([...LEYES_REF]);

  itemStart = '';

  tittles = new Map<string, string>([
    ['balas', 'Balas de Plata'],
    ['lehman', 'Leyes de Lehman'],
    ['conway', 'Ley de Conway'],
    ['murphy', 'Ley de Murphy'],
    ['pendulo', 'Ley del pendulo'],
    ['hyrum', 'Ley de Hyrum'],
    ['leblanc', 'Ley de Leblanc´s'],
    ['leyesInternet', 'Leyes En Internet'],
    ['pareto', 'Ley de Pareto'],
    ['brooksLaw', 'Ley de Brooks'],
    ['mooreAndWirth', 'Moore & Wirth'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

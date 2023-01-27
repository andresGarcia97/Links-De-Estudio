import { Component } from '@angular/core';
import { LEYES } from 'src/app/models/content/content2';
import { LEYES_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-leyes',
  templateUrl: './leyes.component.html'
})
export class LeyesComponent {

  items = LEYES;

  components = new Map([ ...LEYES_REF ]);

  tittles = new Map<string, string>([
    ['balas', 'Balas de Plata'],
    ['lehman', 'Leyes de Lehman'],
    ['conway', 'Ley de Conway'],
    ['murphy', 'Ley de Murphy'],
    ['pendulo', 'Ley del pendulo'],
    ['hyrum', 'Ley de Hyrum'],
    ['leblanc', 'Ley de Leblanc´s'],
    ['leyesInternet', 'Leyes En Internet']
  ]);

}

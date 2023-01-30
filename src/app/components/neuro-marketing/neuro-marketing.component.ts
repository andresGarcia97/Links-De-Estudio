import { Component } from '@angular/core';
import { NEURO_MARKETING } from 'src/app/models/content/content3';
import { NEURO_MARKETING_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-neuro-marketing',
  templateUrl: './neuro-marketing.component.html'
})
export class NeuroMarketingComponent {

  items = NEURO_MARKETING;

  components = new Map([ ...NEURO_MARKETING_REF ]);

  tittles = new Map<string, string>([
    ['pestel', 'Analisis PESTEL'],
  ]);

}

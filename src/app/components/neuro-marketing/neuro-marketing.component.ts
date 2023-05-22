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
    ['matrizBcg', 'Matriz BCG'],
    ['b2b-b2c', 'B2B & B2C'],
    ['eric', 'Matriz ERIC'],
    ['gamificacionMarketing', 'Gamificacion & Marketing'],
    ['maslow-barret', 'Maslow & Barret'],
    ['cerebroTriurno', 'Cerebro Triurno'],
    ['elementValues', 'Elementos de Valor'],
    ['multi&omniCanal', 'Multi & Omni Canalidad'],
    ['buyerPersona', 'Buyer Persona'],
    ['neuroMarketing', 'Neuro Marketing'],
    ['semanticaPragmatica', 'Semantica & Pragmatica']
  ]);

}

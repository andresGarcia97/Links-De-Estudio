import { Component } from '@angular/core';
import { SMELLS_CODES } from 'src/app/models/content/content3';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-smells-codes',
  templateUrl: './smells-codes.component.html'
})
export class SmellsCodesComponent extends LinkReferencia {

  items = SMELLS_CODES;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['codesmells', 'Smell Codes'],
    ['tiposSmellCodes', 'Tipos'],
    ['desglose', 'Desglose'],
    ['casos', 'Casos especiales'],
    ['payoff', 'Ganancias'],
    ['designsmells', 'A nivel de diseño'],
  ]);

}

import { Component, OnInit } from '@angular/core';
import { SMELLS_CODES } from 'src/app/models/content/content3';
import { SMELL_CODES_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-smells-codes',
  templateUrl: './smells-codes.component.html'
})
export class SmellsCodesComponent implements OnInit {

  items = SMELLS_CODES;

  itemStart = '';

  components = new Map([ ...SMELL_CODES_REF ]);

  tittles = new Map<string, string>([
    ['codesmells', 'Smell Codes'],
    ['tiposSmellCodes', 'Tipos'],
    ['desglose', 'Desglose'],
    ['casos', 'Casos especiales'],
    ['payoff', 'Ganancias'],
    ['designsmells', 'A nivel de diseño'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

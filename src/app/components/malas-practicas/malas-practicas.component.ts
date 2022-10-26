import { Component } from '@angular/core';
import { MALAS_PRACTICAS } from 'src/app/models/content/content2';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-malas-practicas',
  templateUrl: './malas-practicas.component.html'
})
export class MalasPracticasComponent extends LinkReferencia {

  items = MALAS_PRACTICAS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['callbackhell', 'Callback Hell'],
    ['contraCalidad', 'Contra la calidad'],
    ['contraGestion', 'Contra la gestion'],
  ]);

}

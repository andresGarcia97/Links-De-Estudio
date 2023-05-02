import { Component } from '@angular/core';
import { MALAS_PRACTICAS } from 'src/app/models/content/content2';
import { MALAS_PRACTICAS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-malas-practicas',
  templateUrl: './malas-practicas.component.html'
})
export class MalasPracticasComponent {

  items = MALAS_PRACTICAS;

  components = new Map([ ...MALAS_PRACTICAS_REF ]);

  tittles = new Map<string, string>([
    ['callbackhell', 'Callback Hell'],
    ['contraCalidad', 'Contra la calidad'],
    ['contraGestion', 'Contra la gestion'],
    ['contraAgilidad', 'Contra la Agilidad'],
    ['malasPracticasSCRUM', 'Contra SCRUM'],
  ]);

}

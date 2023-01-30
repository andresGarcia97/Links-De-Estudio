import { Component } from '@angular/core';
import { PARADIGMAS } from 'src/app/models/content/content1';
import { PARADIGMAS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-paradigmas',
  templateUrl: './paradigmas.component.html'
})
export class ParadigmasComponent {

  items = PARADIGMAS;

  components = new Map([ ...PARADIGMAS_REF ]);

  tittles = new Map<string, string>([
    ['imperativo', 'Estilos Programación'],
    ['funcional', 'Funcional'],
    ['scripting', 'Scripting'],
    ['reactiva', 'Reactiva'],
    ['marcado', 'De Marcado'],
    ['aspectos', 'Aspectos'],
    ['logica', 'Logica'],
    ['estructurada', 'Estructurada'],
  ]);

}

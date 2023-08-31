import { Component, OnInit } from '@angular/core';
import { PARADIGMAS } from 'src/app/models/content/content1';
import { PARADIGMAS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-paradigmas',
  templateUrl: './paradigmas.component.html'
})
export class ParadigmasComponent  implements OnInit {

  items = PARADIGMAS;

  itemStart = '';

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

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

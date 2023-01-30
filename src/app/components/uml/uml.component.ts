import { Component } from '@angular/core';
import { UML } from 'src/app/models/content/content3';
import { UML_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-uml',
  templateUrl: './uml.component.html'
})
export class UmlComponent {

  items = UML;

  components = new Map([ ...UML_REF ]);

  tittles = new Map<string, string>([
    ['uml', '¿ Que es ?'],
    ['clase', 'De Clases'],
    ['componentes', 'De Componentes'],
    ['despliegue', 'De Despliegue'],
    ['usos', 'Casos de Uso'],
    ['secuencia', 'De Secuencia'],
    ['actividades', 'De Actividades'],
    ['paquetes', 'De Paquetes'],
    ['estados', 'De Estados'],
    ['vista', '4+1 Vistas'],
    ['tiposUml', 'Tipos de Diagramas'],

  ]);

}

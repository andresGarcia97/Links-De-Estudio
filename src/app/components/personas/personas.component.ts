import { Component } from '@angular/core';
import { PERSONAS } from 'src/app/models/content/content1';
import { PEOPLE } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html'
})
export class PersonasComponent {

  items = PERSONAS;

  components = new Map([ ...PEOPLE ]);

  tittles = new Map<string, string>([
    ['personasYprocesos', 'Personas y procesos'],
    ['gestionDeServicios', 'Gestión de servicios'],
    ['gestionDeActivos', 'Gestión de activos'],
    ['fidelizacion', 'Fidelizacion'],
    ['modeloDIKW', 'Modelo DIKW'],
    ['gestionDeExpectativas', 'Gestion de expectativas'],
    ['capa8', 'Error en capa 8'],
    ['noNewsGoodNews', 'No News Good News'],
    ['tiposHackers', 'Tipos de Hackers']
  ]);

}

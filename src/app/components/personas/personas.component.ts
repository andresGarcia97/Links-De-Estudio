import { Component } from '@angular/core';
import { PERSONAS } from 'src/app/models/content/content1';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html'
})
export class PersonasComponent extends LinkReferencia {

  items = PERSONAS;

  lengthItems = this.items.length - 1;

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

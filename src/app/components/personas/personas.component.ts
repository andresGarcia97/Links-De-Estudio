import { Component, OnInit } from '@angular/core';
import { PERSONAS } from 'src/app/models/content/content1';
import { PEOPLE } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html'
})
export class PersonasComponent implements OnInit {

  items = PERSONAS;

  components = new Map([ ...PEOPLE ]);

  itemStart = '';

  tittles = new Map<string, string>([
    ['personasYprocesos', 'Personas y procesos'],
    ['gestionDeServicios', 'Gestión de servicios'],
    ['gestionDeActivos', 'Gestión de activos'],
    ['fidelizacion', 'Fidelizacion'],
    ['modeloDIKW', 'Modelo DIKW'],
    ['gestionDeExpectativas', 'Gestion de expectativas'],
    ['capa8', 'Error en capa 8'],
    ['noNewsGoodNews', 'No News Good News'],
    ['tiposHackers', 'Tipos de Hackers'],
    ['sindromesLaborales', 'Sindromes Laborales'],
    ['icebergIgnorance', 'Iceberg de la Ignorancia'],
    ['ubicuo', 'Lenguaje Ubicuo']
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

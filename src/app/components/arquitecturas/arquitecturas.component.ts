import { Component } from '@angular/core';
import { ARQUITECTURAS } from 'src/app/models/content/content1';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-arquitecturas',
  templateUrl: './arquitecturas.component.html'
})
export class ArquitecturasComponent extends LinkReferencia {

  items = ARQUITECTURAS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['definicion', 'Definición'],
    ['inicioArquitectura', 'Etapas & Roles'],
    ['conceptosArquitectura', 'Conceptos'],
    ['principiosArquitecturas', 'Principios'],
    ['arquitecturasLimpias', 'Limpias'],
    ['capas', 'Capas'],
    ['cliente', 'Cliente Servidor'],
    ['intermediario', 'Intermediario'],
    ['servicios', 'Microservicios'],
    ['hexagonal', 'Hexagonal'],
    ['noHexagonal', 'Ni Nueva, Ni hexagonal'],
    ['mvc', 'MVC'],
    ['mvp-mvc', 'MVP'],
    ['otrasArquitecturas', 'Otras'],
    ['monolitos', 'Monolitos'],
  ]);

}

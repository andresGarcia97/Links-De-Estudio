import { Component } from '@angular/core';
import { REQUISITOS } from 'src/app/models/content/content3';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html'
})
export class RequisitosComponent extends LinkReferencia {

  items = REQUISITOS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['funcionales', 'Funcionales'],
    ['NOfuncionales', 'NO Funcionales'],
    ['negocio', 'EL Negocio'],
    ['ambiguedad', 'Evitar la ambiguedad'],
    ['calidad', 'Atributos de calidad'],
    ['tradeoff', 'Trade-offs'],
    ['objetivos', 'Objetivos & Requisitos'],
  ]);

}

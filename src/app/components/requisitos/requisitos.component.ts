import { Component, OnInit } from '@angular/core';
import { REQUISITOS } from 'src/app/models/content/content3';
import { REQUISITOS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html'
})
export class RequisitosComponent implements OnInit {

  items = REQUISITOS;

  itemStart = '';

  components = new Map([ ...REQUISITOS_REF ]);

  tittles = new Map<string, string>([
    ['funcionales', 'Funcionales'],
    ['NOfuncionales', 'NO Funcionales'],
    ['negocio', 'EL Negocio'],
    ['ambiguedad', 'Evitar la ambiguedad'],
    ['calidad', 'Atributos de calidad'],
    ['tradeoff', 'Trade-offs'],
    ['objetivos', 'Objetivos & Requisitos'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

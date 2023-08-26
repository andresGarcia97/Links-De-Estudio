import { Component, OnInit } from '@angular/core';
import { METODOLOGIAS } from 'src/app/models/content/content2';
import { METODOLOGIAS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-metodologias',
  templateUrl: './metodologias.component.html'
})
export class MetodologiasComponent implements OnInit {

  items = METODOLOGIAS;

  itemStart = '';

  components = new Map([ ...METODOLOGIAS_REF ]);

  tittles = new Map<string, string>([
    ['agiles', 'Agiles'],
    ['scrum', 'SCRUM'],
    ['scrumPrinciples', 'Principios Scrum'],
    ['kanban', 'Kanban'],
    ['elevator', 'Elevator Pitch'],
    ['canvas', 'Canvas'],
    ['tradicionales', 'Tradicionales'],
    ['cascada', 'Cascada'],
    ['espiral', 'Espiral'],
    ['iterativo', 'Iterativo-Incremental'],
    ['extrema', 'XP'],
    ['v', 'Modelo V'],
    ['rup', 'RUP'],
    ['kaizen', 'Kaizen'],
    ['scrumban', 'Scrumban']
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

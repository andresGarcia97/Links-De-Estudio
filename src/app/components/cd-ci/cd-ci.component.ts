import { Component, OnInit } from '@angular/core';
import { CD_CI_INFRAESTRUCTURE } from 'src/app/models/content/content3';
import { CD_CI_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-cd-ci',
  templateUrl: './cd-ci.component.html'
})
export class CDCIComponent implements OnInit {

  items = CD_CI_INFRAESTRUCTURE;

  components = new Map([ ...CD_CI_REF ]);

  itemStart = '';

  tittles = new Map<string, string>([
    ['cdci', 'CD/CI'],
    ['devops', 'DevOps'],
    ['dataStoring', 'Almacenamiento de datos'],
    ['iascode', 'Infraestructura & Codigo'],
    ['stateless-stateful', 'Stateless VS Stateful'],
    ['deploymentPatterns', 'Patrones de Despliegue'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

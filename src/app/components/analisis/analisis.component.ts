import { Component } from '@angular/core';
import { ANALISIS } from 'src/app/models/content/content2';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html'
})
export class AnalisisComponent extends LinkReferencia {

  items = ANALISIS;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['comportamiento', 'Comportamiento'],
    ['dominio', 'Analisis de Dominio'],
    ['case', 'Herramientas CASE'],
    ['divide', 'Divide y venceras'],
    ['diseño', 'Un buen diseño'],
    ['crc', 'Tarjetas CRC'],
    ['avestruz', 'Avestruz'],
    ['modeloDominio', 'Modelo de dominio'],
    ['sistemasInformacion', 'Información'],
    ['dataAnalisis', 'Analisis de datos'],
    ['timeComplexityBigO', 'Big O Notación'],
    ['kpis', 'KPI'],
  ]);

}

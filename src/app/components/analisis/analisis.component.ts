import { Component, OnInit } from '@angular/core';
import { ANALISIS } from 'src/app/models/content/content2';
import { ANALISIS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html'
})
export class AnalisisComponent implements OnInit {

  items = ANALISIS;

  components = new Map([...ANALISIS_REF]);

  itemStart = '';

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
    ['manifiestoReactivo', 'Manifiesto Reactivo'],
    ['declineDesign', 'Declive del Diseño'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

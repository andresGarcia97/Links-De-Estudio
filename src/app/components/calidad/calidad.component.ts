import { Component, OnInit } from '@angular/core';
import { CALIDAD } from 'src/app/models/content/content1';
import { CALIDAD_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.component.html'
})
export class CalidadComponent implements OnInit {

  items = CALIDAD;

  components = new Map([ ...CALIDAD_REF ]);

  itemStart = '';

  tittles = new Map<string, string>([
    ['artesanos', 'Artesanos'],
    ['metricas', 'Metricas #1'],
    ['metricasEnCodigo', 'Metricas #2'],
    ['cleanCode', 'Clean Code'],
    ['costOfQuality', 'Costo de la calidad'],
    ['qualityGates', 'Politicas de calidad'],
    ['qualityMetrics', 'Metricas de calidad'],
    ['codeReviews', 'Revisiones'],
    ['linting', 'Linting'],
    ['analystQA', 'Analista de QA']
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

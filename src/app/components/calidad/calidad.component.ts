import { Component } from '@angular/core';
import { CALIDAD } from 'src/app/models/content/content1';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.component.html'
})
export class CalidadComponent extends LinkReferencia {

  items = CALIDAD;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['artesanos', 'Artesanos'],
    ['metricas', 'Metricas #1'],
    ['metricasEnCodigo', 'Metricas #2'],
    ['cleanCode', 'Clean Code'],
    ['costOfQuality', 'Costo de la calidad'],
    ['qualityGates', 'Politicas de calidad'],
    ['qualityMetrics', 'Metricas de calidad'],
  ]);

}

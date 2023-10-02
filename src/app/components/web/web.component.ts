import { Component, OnInit } from '@angular/core';
import { WEB } from 'src/app/models/content/content1';
import { WEB_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html'
})
export class WebComponent implements OnInit {

  items = WEB;

  components = new Map([ ...WEB_REF ]);

  itemStart = '';

  tittles = new Map<string, string>([
    ['spa', 'SPA'],
    ['pwa', 'PWA'],
    ['seo', 'SEO'],
    ['espacio', 'Espacio Negativo'],
    ['diseno', 'Diseño Grafico'],
    ['experienciasUsuario', 'UX'],
    ['interfacesUsuario', 'UI'],
    ['logos', 'Logos'],
    ['gestalt', 'Teoria de Gestalt'],
    ['ssr-csr-ssg-isr', 'SSR vs CSR vs SSG'],
    ['esqueumorfismo', 'Esqueumorfismo'],
    ['menorSorpresa', 'Menor Sorpresa']
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

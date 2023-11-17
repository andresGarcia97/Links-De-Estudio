import { Component, OnInit } from '@angular/core';
import { ARQUITECTURAS } from 'src/app/models/content/content1';
import { ANALISIS_KEY, ARQUITECTURAS_REF, LinkReferencia, METODOLOGIAS_KEY, PATRONES_KEY, UML_KEY } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-arquitecturas',
  templateUrl: './arquitecturas.component.html'
})
export class ArquitecturasComponent implements OnInit {

  items = ARQUITECTURAS;

  components = new Map([ ...ARQUITECTURAS_REF ]);

  itemStart = '';

  relatedSections = new Map<string, string>([]);

  tittles = new Map<string, string>([
    ['definicion', 'Definición'],
    ['inicioArquitectura', 'Etapas & Roles'],
    ['conceptosArquitectura', 'Conceptos'],
    ['principiosArquitecturas', 'Principios'],
    ['arquitecturasLimpias', 'Limpias'],
    ['capas', 'Capas'],
    ['cliente', 'Cliente Servidor'],
    ['microServiciosFundamentals', 'Bases, Microservicios'],
    ['servicios', 'Microservicios'],
    ['hexagonal', 'Hexagonal'],
    ['noHexagonal', 'Ni Nueva, Ni hexagonal'],
    ['mvc', 'MVC'],
    ['mvpMvc', 'MVP'],
    ['otrasArquitecturas', 'Otras (patrones)'],
    ['monolitos', 'Monolitos'],
    ['stylesArchitecture1', 'Estilos & Patrones #1'],
    ['stylesArchitecture2', 'Estilos & Patrones #2'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
    const routes = new LinkReferencia().routesAndSections;
    this.relatedSections.set(METODOLOGIAS_KEY, routes.get(METODOLOGIAS_KEY)!);
    this.relatedSections.set(PATRONES_KEY    , routes.get(PATRONES_KEY)!);
    this.relatedSections.set(ANALISIS_KEY    , routes.get(ANALISIS_KEY)!);
    this.relatedSections.set(UML_KEY         , routes.get(UML_KEY)!);
  }

}

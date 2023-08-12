import { Component, OnInit } from '@angular/core';
import { ARQUITECTURAS } from 'src/app/models/content/content1';
import { ARQUITECTURAS_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-arquitecturas',
  templateUrl: './arquitecturas.component.html'
})
export class ArquitecturasComponent implements OnInit {

  items = ARQUITECTURAS;

  components = new Map([ ...ARQUITECTURAS_REF ]);

  itemStart = '';

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
  }

}

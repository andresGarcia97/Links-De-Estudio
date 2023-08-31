import { Component, OnInit } from '@angular/core';
import { POO } from 'src/app/models/content/content3';
import { POO_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html'
})
export class PooComponent  implements OnInit {

  items = POO;

  components = new Map([ ...POO_REF ]);

  itemStart = '';

  tittles = new Map<string, string>([
    ['poo', 'POO'],
    ['pooPilares', 'Pilares POO'],
    ['composicion', 'Relaciones'],
    ['pooStatic', 'Static en POO'],
    ['sobrecarga', 'Sobrecargar Metodos'],
    ['acoplamiento', 'Acoplamiento'],
    ['contratos', 'Contratos'],
    ['descomposicion', 'Descomposición'],
    ['herencia', 'Herencia'],
    ['polimorfismo', 'Polimorfismo'],
    ['herVScomp', 'Herencia/Composición'],
    ['enlaces', 'Enlaces'],
    ['acoplamientoComponentes', 'SDP, ADP, SAP'],
    ['beginingPoo', 'Inicios de POO'],
    ['inmutability', 'Inmutabilidad'],
    ['typesPolimorfismo', 'Tipos de Polimorfismo'],
    ['factoryMethods', 'Factory Methods'],
    ['interfacesOverInheritance', 'Interfaces VS Herencia'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

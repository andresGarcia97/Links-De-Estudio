import { Component } from '@angular/core';
import { COMPILACION } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-compilacion',
  templateUrl: './compilacion.component.html'
})
export class CompilacionComponent extends LinkReferencia {

  items = COMPILACION;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['compilacion', '¿ que es ?'],
    ['nivel', 'Niveles'],
    ['interprete', 'Interpretes'],
    ['transpilacion', 'Transpilación'],
    ['azucarSintactico', 'Azucar Sintactico'],
    ['coercion', 'Coerción'],
    ['ofuscacion', 'Ofuscación'],
    ['treeShaking', 'Tree Shaking'],
    ['grafos','Grafos'],
    ['compilacionAnticipada','Compilación anticipada'],
    ['duckTyping','Duck Typing'],
    ['sdkVsApi','SDK vs API'],
  ]);

}

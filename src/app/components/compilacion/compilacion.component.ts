import { Component, OnInit } from '@angular/core';
import { COMPILACION } from 'src/app/models/content/content2';
import { COMPILACION_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-compilacion',
  templateUrl: './compilacion.component.html'
})
export class CompilacionComponent implements OnInit {

  items = COMPILACION;

  components = new Map([ ...COMPILACION_REF ]);

  itemStart = '';

  tittles = new Map<string, string>([
    ['compilacion', '¿ que es ?'],
    ['nivel', 'Niveles'],
    ['interprete', 'Interpretes'],
    ['transpilacion', 'Transpilación'],
    ['azucarSintactico', 'Azucar Sintactico'],
    ['coercion', 'Coerción'],
    ['ofuscacion', 'Ofuscación'],
    ['treeShaking', 'Tree Shaking'],
    ['grafos', 'Grafos'],
    ['compilacionAnticipada', 'Compilación anticipada'],
    ['duckTyping', 'Duck Typing'],
    ['sdkVsApi', 'SDK vs API'],
    ['casting', 'Casteo de Datos'],
    ['verbosity', 'Verbosidad'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { LinkFuente } from 'src/app/models/linkFuente';
import { Fuente } from 'src/app/models/models';

const fuentes = new LinkFuente().fuentes;

@Component({
    selector: 'app-fuente',
    templateUrl: './fuente.component.html',
    standalone: true
})
export class FuenteComponent implements OnInit {

  @Input() key = '';
  fuente = new Fuente();

  ngOnInit(): void {
    this.fuente = this.getLinkAndFuenteByKey(this.key);
  }

  private getLinkAndFuenteByKey(key: string = ''): Fuente {
    const fuenteFromMap = fuentes.get(key);
    this.fuente.titulo = fuenteFromMap?.titulo || '';
    this.fuente.referencia = fuenteFromMap?.referencia || '';
    return this.fuente;
  }

}

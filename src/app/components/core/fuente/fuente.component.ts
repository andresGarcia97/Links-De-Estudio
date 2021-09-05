import { Component, Input, OnInit } from '@angular/core';
import { LinkFuente } from 'src/app/models/linkFuente';

@Component({
  selector: 'app-fuente',
  templateUrl: './fuente.component.html'
})
export class FuenteComponent extends LinkFuente implements OnInit {

  @Input() key = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.fuente = this.getLinkAndFuenteByKey(this.key);
  }

}

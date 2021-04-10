import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-historia-usuario',
  templateUrl: './historia-usuario.component.html'
})
export class HistoriaUsuarioComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

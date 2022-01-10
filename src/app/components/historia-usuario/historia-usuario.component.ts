import { Component } from '@angular/core';
import { HISTORIAS_USUARIO } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-historia-usuario',
  templateUrl: './historia-usuario.component.html'
})
export class HistoriaUsuarioComponent extends LinkReferencia {

  items = HISTORIAS_USUARIO;

}

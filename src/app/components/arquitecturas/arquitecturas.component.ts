import { Component } from '@angular/core';
import { ARQUITECTURAS } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-arquitecturas',
  templateUrl: './arquitecturas.component.html'
})
export class ArquitecturasComponent extends LinkReferencia {

  items = ARQUITECTURAS;

}

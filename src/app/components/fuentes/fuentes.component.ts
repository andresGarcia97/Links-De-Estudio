import { Component } from '@angular/core';
import { APIS, BACK, CURIOSITIES, FRONT, GIT, SECURITY, TESTING, UTILS } from 'src/app/models/linkFuente';

@Component({
  selector: 'app-fuentes',
  templateUrl: './fuentes.component.html'
})
export class FuentesComponent {

  front = [...FRONT.keys()];

  back = [...BACK.keys()];

  utils = [...UTILS.keys()];

  testing = [...TESTING.keys()];

  curiosities = [...CURIOSITIES.keys()];

  security = [...SECURITY.keys()];

  git = [...GIT.keys()];

  apis = [...APIS.keys()];

}

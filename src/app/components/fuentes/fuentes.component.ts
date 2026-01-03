import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { APIS, BACK, CURIOSITIES, DOCKER, FRONT, GIT, SECURITY, SQL, TESTING, UTILS } from 'src/app/models/linkFuente';
import { FuenteComponent } from './fuente/fuente.component';

@Component({
    selector: 'app-fuentes',
    templateUrl: './fuentes.component.html',
    standalone: true,
    imports: [
      NgFor,
      FuenteComponent
    ]
})
export class FuentesComponent {

  front = [...FRONT.keys()];

  back = [...BACK.keys()];

  sql = [...SQL.keys()];

  docker = [...DOCKER.keys()];

  utils = [...UTILS.keys()];

  testing = [...TESTING.keys()];

  curiosities = [...CURIOSITIES.keys()];

  security = [...SECURITY.keys()];

  git = [...GIT.keys()];

  apis = [...APIS.keys()];

}

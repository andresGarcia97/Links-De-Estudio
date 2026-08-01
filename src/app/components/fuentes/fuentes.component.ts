import { Component } from '@angular/core';
import { APIS, BACK, CURIOSITIES, DOCKER, FRONT, FRONT_STYLES, GIT, SECURITY, SQL, SYSTEM_DESIGN, TESTING, UTILS }
from 'src/app/models/linkFuente';
import { FuenteComponent } from './fuente/fuente.component';

@Component({
    selector: 'app-fuentes',
    templateUrl: './fuentes.component.html',
    standalone: true,
    imports: [
      FuenteComponent
    ]
})
export class FuentesComponent {

  front = [...FRONT.keys()];

  frontStyles = [...FRONT_STYLES.keys()];

  back = [...BACK.keys()];

  systemDesign = [...SYSTEM_DESIGN.keys()];

  sql = [...SQL.keys()];

  docker = [...DOCKER.keys()];

  utils = [...UTILS.keys()];

  testing = [...TESTING.keys()];

  curiosities = [...CURIOSITIES.keys()];

  security = [...SECURITY.keys()];

  git = [...GIT.keys()];

  apis = [...APIS.keys()];

}

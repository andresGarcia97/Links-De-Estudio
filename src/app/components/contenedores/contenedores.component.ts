import { Component } from '@angular/core';
import { DOCKER } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-docker',
  templateUrl: './contenedores.component.html'
})
export class ContenedoresComponent extends LinkReferencia {

  items = DOCKER;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['lxc', 'Linux Containers'],
    ['docker', 'Docker'],
    ['images', 'Imagenes'],
    ['containers', 'Contenedores'],
    ['volumes', 'Volumenes'],
    ['network', 'Redes'],
    ['file', 'DockerFile'],
    ['compose', 'Docker Compose'],
    ['kubernetes', 'Kubernetes'],
  ]);

}

import { Component, OnInit } from '@angular/core';
import { CONTENEDORES } from 'src/app/models/content/content1';
import { CONTAINERS } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-docker',
  templateUrl: './contenedores.component.html'
})
export class ContenedoresComponent implements OnInit {

  items = CONTENEDORES;

  components = new Map([...CONTAINERS]);

  itemStart = '';

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
    ['containerOrchestation', 'Orquestación'],
    ['openContainer', 'Open Container Initiative']
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

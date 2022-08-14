import { Component } from '@angular/core';
import { GIT } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html'
})
export class GitComponent extends LinkReferencia {

  items = GIT;

  lengthItems = this.items.length - 1;

  tittles = new Map<string, string>([
    ['introduccion', 'Introducción'],
    ['repositorios', 'Repositorios'],
    ['ramas', 'Ramas'],
    ['protocolos', 'Protocolos'],
    ['versiones', 'Versiones y tags'],
    ['forks', 'Forks y Pull requests'],
    ['stash', 'Stash y limpieza'],
    ['merge', 'Merge'],
    ['atributos', 'Atributos'],
    ['migracion', 'Entresijos'],
    ['flow', 'Git flow'],
    ['practicas', 'Buenas Practicas'],
  ]);

}

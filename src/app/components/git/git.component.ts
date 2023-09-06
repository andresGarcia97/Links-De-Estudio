import { Component, OnInit } from '@angular/core';
import { GIT } from 'src/app/models/content/content2';
import { GIT_REF } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html'
})
export class GitComponent implements OnInit {

  items = GIT;

  components = new Map([ ...GIT_REF ]);

  itemStart = '';

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
    ['branching-strategies', 'Ramificación'],
    ['monoRepo', 'Mono Repo'],
  ]);

  ngOnInit(): void {
    this.itemStart = history?.state?.newItem;
  }

}

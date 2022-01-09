import { Component } from '@angular/core';
import { GIT } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html'
})
export class GitComponent extends LinkReferencia {

  items = GIT;

}

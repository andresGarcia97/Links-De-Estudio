import { Component } from '@angular/core';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html'
})
export class GitComponent extends LinkReferencia {

  constructor() {
    super();
  }

}

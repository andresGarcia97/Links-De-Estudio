import { Component } from '@angular/core';
import { UML } from 'src/app/models/content';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-uml',
  templateUrl: './uml.component.html'
})
export class UmlComponent extends LinkReferencia {

  items = UML;

  lengthItems = this.items.length - 1;

}

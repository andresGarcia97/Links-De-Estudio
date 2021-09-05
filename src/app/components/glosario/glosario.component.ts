import { Component } from '@angular/core';
import { LinkFuente } from 'src/app/models/linkFuente';
import { LinkReferencia } from 'src/app/models/linkReferencia';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html'
})
export class GlosarioComponent {

  search = '';

  referencia = new LinkReferencia();

  links = this.referencia.links;

  tittles = this.referencia.tittles;

  onlyLinks = Array.from(this.links, ([name, value]) => ({ name, value }));

  fuentes = new LinkFuente().fuentes;

  previewFuentes = Array.from(this.fuentes, ([name, value]) => ({ name, value }));

  onlyFuentes = this.convertArrayObjectToArrayStrings(this.previewFuentes);

  protected convertArrayObjectToArrayStrings(namesAndValues: Array<any>): Array<object> {
    const onlyFuentes = new Array();
    namesAndValues.forEach((element) => {
      const newElement = { name: element.value.titulo, value: element.value.referencia };
      onlyFuentes.push(newElement);
    });
    return onlyFuentes;
  }

}

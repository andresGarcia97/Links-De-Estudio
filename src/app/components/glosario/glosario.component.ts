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

  componentes = this.referencia.components;

  fuentes = new LinkFuente().fuentes;

  previewFuentes = Array.from(this.fuentes, ([name, value]) => ({ name, value }));

  onlyFuentes = this.convertArrayObjectToArrayStrings(this.previewFuentes);

  previewComponents = Array.from(this.componentes, ([name, value]) => ({ name, value }));

  onlyComponents = this.convertArrayObjectToArrayString(this.previewComponents);

  protected convertArrayObjectToArrayStrings(namesAndValues: Array<any>): Array<object> {
    const onlyFuentes = new Array();
    namesAndValues.forEach((element) => {
      const newElement = { name: element.value.titulo, value: element.value.referencia };
      onlyFuentes.push(newElement);
    });
    return onlyFuentes;
  }

  protected convertArrayObjectToArrayString(namesAndValues: Array<any>): Array<object> {
    const onlyComponents = new Array();
    namesAndValues.forEach((element) => {
      const newElement = { titulo: element.value.titulo, referencia: element.value.referencia, componente: element.value.component };
      onlyComponents.push(newElement);
    });
    return onlyComponents;
  }

}

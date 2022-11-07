import { Component, OnInit } from '@angular/core';
import { ContentMain } from 'src/app/models/contentMain';
import { LinkFuente } from 'src/app/models/linkFuente';
import { LinkReferencia } from 'src/app/models/linkReferencia';
import { Item } from 'src/app/models/models';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html'
})
export class GlosarioComponent implements OnInit {

  ngOnInit(): void {
    console.info("%c Actualmente son: " + this.temas.length + " Temas ", "color:#000; font-size: 16px;background:#FFBA08; font-weight: bold;");
  }

  search = '';

  fuentes = new LinkFuente().fuentes;
  previewFuentes = Array.from(this.fuentes, ([name, value]) => ({ name, value }));
  onlyFuentes = this.convertArrayObjectToArrayStrings(this.previewFuentes);

  linkReferencia = new LinkReferencia();
  componentes = this.linkReferencia.components;
  previewComponents = Array.from(this.componentes, ([name, value]) => ({ name, value }));
  onlyComponents = this.convertArrayObjectToArrayString(this.previewComponents);

  referencia = '';
  titulo = '';

  content = new ContentMain();
  temas = this.content.temas;
  item = new Item('', []);

  showItem = false;

  protected convertArrayObjectToArrayStrings(namesAndValues: Array<any>): Array<object> {
    const onlyFuentes = new Array();
    namesAndValues.forEach((element) => {
      const newElement = {
        titulo: element.value.titulo,
        referencia: element.value.referencia,
        componente: 'contenido practico'
      };
      onlyFuentes.push(newElement);
    });
    return onlyFuentes;
  }

  protected convertArrayObjectToArrayString(namesAndValues: Array<any>): Array<object> {
    const onlyComponents = new Array();
    namesAndValues.forEach((element) => {
      const newElement = {
        titulo: element.value.titulo,
        referencia: element.value.referencia,
        componente: element.value.component,
        key: element.name
      };
      onlyComponents.push(newElement);
    });
    return onlyComponents;
  }

  public scrollToView($element: any): void {
    if (typeof $element !== 'undefined') {
      $element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public crearVistaItem(key: string, $view: any): void {
    const items = this.content.temas.filter((item) => {
      return item.key.includes(key);
    });
    if (items.length === 0) {
      this.showItem = false;
    }
    else {
      this.referencia = this.componentes.get(key)?.referencia || '';
      this.titulo = this.componentes.get(key)?.titulo || '';
      this.item = new Item(items[0].key, items[0].content);
      this.showItem = true;
      this.scrollToView($view);
    }
  }

  public searchChanged(): void {
    this.showItem = false;
    this.titulo = '';
  }

}

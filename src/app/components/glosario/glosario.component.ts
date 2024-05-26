import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Content1 } from 'src/app/models/content/content1';
import { Content2 } from 'src/app/models/content/content2';
import { Content3 } from 'src/app/models/content/content3';
import { Content4 } from 'src/app/models/content/content4';
import { Content5 } from 'src/app/models/content/content5';
import { LinkFuente } from 'src/app/models/linkFuente';
import { LinkReferencia } from 'src/app/models/linkReferencia';
import { Item } from 'src/app/models/models';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html'
})
export class GlosarioComponent implements OnInit {

  @ViewChild("inputSearch") inputSearch!: ElementRef;

  fuentes = new LinkFuente().fuentes;

  temas = Array.from(new Content1().temas).concat(new Content2().temas).concat(new Content3().temas).concat(new Content4().temas).concat(new Content5().temas);

  ngOnInit(): void {
    console.info("%c Actualmente son: " + this.temas.length + " Temas ", "color:#000; font-size: 16px;background:#FFBA08; font-weight: bold;");
    console.info("%c Tambien hay: " + this.fuentes.size + " Temas practicos ", "color:white; font-size: 16px;background:#1976d2; font-weight: bold;");
  }

  constructor(private router: Router) { }

  search = '';

  previewFuentes = Array.from(this.fuentes, ([name, value]) => ({ name, value }));
  onlyFuentes = this.convertArrayObjectToArrayStrings(this.previewFuentes);

  linkReferencia = new LinkReferencia();
  componentes = this.linkReferencia.components;
  previewComponents = Array.from(this.componentes, ([name, value]) => ({ name, value }));
  onlyComponents = this.convertArrayObjectToArrayString(this.previewComponents);

  referencia = '';
  titulo = '';

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
        titulo: element.value.tittle,
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

  public createViewItem(key: string, $view: any): void {
    const items = this.temas.filter((item) => {
      return item.key === key;
    });
    if (items.length === 0) {
      this.showItem = false;
    }
    else {
      this.referencia = this.componentes.get(key)?.referencia ?? '';
      this.titulo = this.componentes.get(key)?.tittle ?? '';
      this.item = new Item(items[0].key, items[0].content);
      this.showItem = true;
      this.scrollToView($view);
    }
    if (this.search != '') {
      this.inputSearch.nativeElement.focus();
    }
  }

  public searchChanged(): void {
    this.showItem = false;
    this.titulo = '';
  }

  public goToSection(component: string, item: string) {
    const urlSection = this.linkReferencia.routesAndSections.get(component);
    this.router.navigateByUrl(`/${urlSection}`, { state: { newItem: item } })
  }

  public cleanSearch(): void {
    this.showItem = false;
    this.titulo = '';
    this.search = '';
    this.inputSearch.nativeElement.focus();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Content1 } from 'src/app/models/content/content1';
import { Content2 } from 'src/app/models/content/content2';
import { Content3 } from 'src/app/models/content/content3';
import { LinkFuente } from 'src/app/models/linkFuente';
import { LinkReferencia } from 'src/app/models/linkReferencia';
import { Item } from 'src/app/models/models';
import Swal from 'sweetalert2';

const colorCrimson = '#dd0031';
const colorNavyBlue = '#1976d2';
const colorFulvous = '#E8871E';
const colorCultured = '#eeeeee';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html'
})
export class GlosarioComponent implements OnInit {

  temas1 = new Content1();
  temas2 = new Content2();
  temas3 = new Content3();

  temas: Item[] = [];

  ngOnInit(): void {
    this.temas = Array.from(this.temas1.temas).concat(this.temas2.temas).concat(this.temas3.temas);
    console.info("%c Actualmente son: " + this.temas.length + " Temas ", "color:#000; font-size: 16px;background:#FFBA08; font-weight: bold;");
  }

  constructor(private router: Router) { }

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

  public createViewItem(key: string, $view: any): void {
    const items = this.temas.filter((item) => {
      return item.key === key;
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

  private getColorButton(): string {
    const body = document.body;
    const isDarkModeActive = body.classList.contains('oscuro');
    return isDarkModeActive ? colorNavyBlue : colorFulvous;
  }

  public goToSection(component: string, $view: any) {

    const colorConfirmButton = this.getColorButton();

    Swal.fire({
      title: "<h5 style='color:black'>¿ Abandonar la pagina actual ?</h5>",
      showCancelButton: true,
      confirmButtonColor: colorConfirmButton,
      cancelButtonColor: colorCrimson,
      confirmButtonText: '¿ Ir a la Sección ?',
      cancelButtonText: 'Volver al tema',
      background: colorCultured
    }).then((result) => {
      if (result.isConfirmed) {
        const urlSection = this.linkReferencia.routesAndSections.get(component);
        this.router.navigateByUrl(`/${urlSection}`);
      }
      else {
        setTimeout(() => {
          this.scrollToView($view);
        }, 650);
      }
    })

  }

  public cleanSearch(): void {

    const colorConfirmButton = this.getColorButton();
    const message = this.titulo === ''
      ? `<h5 style='color:black'>Ultima busqueda: <em>${this.search}</em></h5>`
      : `<h5 style='color:black'>Ultimo tema: <em>${this.titulo}</em></h5>`;

    let timerInterval: any;
    Swal.fire({
      confirmButtonColor: colorConfirmButton,
      title: message,
      timer: 2000,
      timerProgressBar: true,
      background: colorCultured,
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })

    this.showItem = false;
    this.titulo = '';
    this.search = '';
  }

}

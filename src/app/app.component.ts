import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { AgilesComponent } from './components/agiles/agiles.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { ArquitecturasComponent } from './components/arquitecturas/arquitecturas.component';
import { BuenasPracticasComponent } from './components/buenas-practicas/buenas-practicas.component';
import { CalidadComponent } from './components/calidad/calidad.component';
import { CompilacionComponent } from './components/compilacion/compilacion.component';
import { ConocimientosEmpiricosComponent } from './components/conocimientos-empiricos/conocimientos-empiricos.component';
import { ContenedoresComponent } from './components/contenedores/contenedores.component';
import { EstrategiasDesarrolloComponent } from './components/estrategias-desarrollo/estrategias-desarrollo.component';
import { FrameworksComponent } from './components/frameworks/frameworks.component';
import { FuentesComponent } from './components/fuentes/fuentes.component';
import { GitComponent } from './components/git/git.component';
import { GlosarioComponent } from './components/glosario/glosario.component';
import { HardwareComponent } from './components/hardware/hardware.component';
import { HistoriaUsuarioComponent } from './components/historia-usuario/historia-usuario.component';
import { LeyesComponent } from './components/leyes/leyes.component';
import { MalasPracticasComponent } from './components/malas-practicas/malas-practicas.component';
import { MetaCaracteristicasComponent } from './components/meta-caracteristicas/meta-caracteristicas.component';
import { MetaEstructuraComponent } from './components/meta-estructura/meta-estructura.component';
import { MetodologiasComponent } from './components/metodologias/metodologias.component';
import { NubeComponent } from './components/nube/nube.component';
import { OtrosComponent } from './components/otros/otros.component';
import { ParadigmasComponent } from './components/paradigmas/paradigmas.component';
import { PatronesComponent } from './components/patrones/patrones.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PooComponent } from './components/poo/poo.component';
import { PrincipiosComponent } from './components/principios/principios.component';
import { PruebasAvanzadasComponent } from './components/pruebas-avanzadas/pruebas-avanzadas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { RefactorizacionComponent } from './components/refactorizacion/refactorizacion.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { SmellsCodesComponent } from './components/smells-codes/smells-codes.component';
import { SqlNosqlComponent } from './components/sql-nosql/sql-nosql.component';
import { UmlComponent } from './components/uml/uml.component';
import { VersionamientoComponent } from './components/versionamiento/versionamiento.component';
import { WebComponent } from './components/web/web.component';

const scroll$ = fromEvent(document, 'scroll');

const calcularPorcentaje = (event: any) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;
  return scrollTop / (scrollHeight - clientHeight) * 100;
};

const porcentaje = scroll$.pipe(
  map(event => calcularPorcentaje(event))
);

const colorSelectiveYellow = '#FFBA08';
const colorNavyBlue = '#1976d2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  
  buttonChangueMode = false;
  buttonCloseComponent = false;
  
  // https://usefulangle.com/post/243/change-browser-address-bar-theme-color-with-html-meta-tag
  constructor(private meta: Meta) {}
  
  ngOnInit(): void {
    const now = new Date();
    if(now.getHours() >= 19 || now.getHours() <= 5) {
      this.changueMode();
      return;
    }
    this.setColorAdressBar();
  }

  @ViewChild('componentes', { read: ViewContainerRef }) componentes!: ViewContainerRef;

  porciento: any = porcentaje.subscribe((valor) => {
    this.porciento = valor;
  });

  domain = "https://contenidoderepaso.web.app/";
  shareLinkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${this.domain}`;
  shareTwitter = `https://twitter.com/intent/tweet?text=Una gran fuente de repaso para Programadores&url=${this.domain}`;
  shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.domain}`;

  public listaComponentes = [
    // 0 - 3
    ArquitecturasComponent, BuenasPracticasComponent, FrameworksComponent, MalasPracticasComponent,
    // 4 - 7
    MetodologiasComponent, OtrosComponent, ParadigmasComponent, PatronesComponent,
    // 8 - 11
    RefactorizacionComponent, PrincipiosComponent, SqlNosqlComponent, CompilacionComponent,
    // 12 - 15
    HistoriaUsuarioComponent, VersionamientoComponent, EstrategiasDesarrolloComponent, UmlComponent,
    // 16 - 19
    RequisitosComponent, PruebasComponent, GitComponent, WebComponent,
    // 20 - 23
    ConocimientosEmpiricosComponent, FuentesComponent, SeguridadComponent, AnalisisComponent,
    // 24 - 27
    ContenedoresComponent, PooComponent, AgilesComponent, SmellsCodesComponent,
    // 28 - 31
    MetaCaracteristicasComponent, GlosarioComponent, NubeComponent, PersonasComponent,
    // 32 - 35
    CalidadComponent, PruebasAvanzadasComponent, HardwareComponent, MetaEstructuraComponent,
    // 36 - 39
    LeyesComponent];

  public crearComponent(component: any, $element: any): void {
    this.buttonCloseComponent = true;
    this.componentes.clear();
    this.componentes.createComponent(component);
    this.scrollToElement($element);
  }

  public scrollToElement($element: any): void {
    if (typeof $element !== 'undefined') {
      $element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public changueMode(): void {
    this.buttonChangueMode = !this.buttonChangueMode;
    const body = document.body;
    body.classList.toggle('oscuro');
    this.updateColorAdressBar();
  }

  public close($element: any): void {
    this.buttonCloseComponent = false;
    this.componentes.clear();
    this.scrollToElement($element);
  }

  public setColorAdressBar(): void {
    const setColorAddressBar = this.buttonChangueMode ? colorSelectiveYellow : colorNavyBlue;
    this.meta.addTag({ name: 'theme-color', content: setColorAddressBar });
  }

  public updateColorAdressBar(): void {
    const updateColorAddressBar = this.buttonChangueMode ? colorSelectiveYellow : colorNavyBlue;
    this.meta.updateTag({ name: 'theme-color', content: updateColorAddressBar });
  }

}

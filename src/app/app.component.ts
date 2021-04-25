import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { ArquitecturasComponent } from './components/arquitecturas/arquitecturas.component';
import { BuenasPracticasComponent } from './components/buenas-practicas/buenas-practicas.component';
import { CompilacionComponent } from './components/compilacion/compilacion.component';
import { ConocimientosEmpiricosComponent } from './components/conocimientos-empiricos/conocimientos-empiricos.component';
import { EstrategiasDesarrolloComponent } from './components/estrategias-desarrollo/estrategias-desarrollo.component';
import { FrameworksComponent } from './components/frameworks/frameworks.component';
import { FuentesComponent } from './components/fuentes/fuentes.component';
import { GitComponent } from './components/git/git.component';
import { HistoriaUsuarioComponent } from './components/historia-usuario/historia-usuario.component';
import { MalasPracticasComponent } from './components/malas-practicas/malas-practicas.component';
import { MetodologiasComponent } from './components/metodologias/metodologias.component';
import { OtrosComponent } from './components/otros/otros.component';
import { ParadigmasComponent } from './components/paradigmas/paradigmas.component';
import { PatronesComponent } from './components/patrones/patrones.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { RefactorizacionComponent } from './components/refactorizacion/refactorizacion.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { SectionsComponent } from './components/sections/sections.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  @ViewChild('componentes', { read: ViewContainerRef }) componentes!: ViewContainerRef;

  porciento: any = porcentaje.subscribe((valor) => {
    this.porciento = valor;
  });

  public listaComponentes = [
    // 0 - 3
    ArquitecturasComponent, BuenasPracticasComponent, FrameworksComponent, MalasPracticasComponent,
    // 4 - 7
    MetodologiasComponent, OtrosComponent, ParadigmasComponent, PatronesComponent,
    // 8 - 11
    RefactorizacionComponent, SectionsComponent, SqlNosqlComponent, CompilacionComponent,
    // 12 - 15
    HistoriaUsuarioComponent, VersionamientoComponent, EstrategiasDesarrolloComponent, UmlComponent,
    // 16 - 19
    RequisitosComponent, PruebasComponent, GitComponent, WebComponent,
    // 20 - 23
    ConocimientosEmpiricosComponent, FuentesComponent, SeguridadComponent, AnalisisComponent];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public crearComponent(component: any, $element: any): void {
    const componente = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentes.clear();
    this.componentes.createComponent(componente);
    this.scrollToElement($element);
  }

  public scrollToElement($element: any): void {
    if (typeof $element !== 'undefined') {
      $element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public cambiarModo(): void {
    const cuerpoweb = document.body;
    cuerpoweb.classList.toggle('oscuro');
  }
}

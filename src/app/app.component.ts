import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArquitecturasComponent } from './components/arquitecturas/arquitecturas.component';
import { BuenasPracticasComponent } from './components/buenas-practicas/buenas-practicas.component';
import { CompilacionComponent } from './components/compilacion/compilacion.component';
import { EstrategiasDesarrolloComponent } from './components/estrategias-desarrollo/estrategias-desarrollo.component';
import { FrameworksComponent } from './components/frameworks/frameworks.component';
import { HistoriaUsuarioComponent } from './components/historia-usuario/historia-usuario.component';
import { MalasPracticasComponent } from './components/malas-practicas/malas-practicas.component';
import { MetodologiasComponent } from './components/metodologias/metodologias.component';
import { OtrosComponent } from './components/otros/otros.component';
import { ParadigmasComponent } from './components/paradigmas/paradigmas.component';
import { PatronesComponent } from './components/patrones/patrones.component';
import { RefactorizacionComponent } from './components/refactorizacion/refactorizacion.component';
import { SectionsComponent } from './components/sections/sections.component';
import { SqlNosqlComponent } from './components/sql-nosql/sql-nosql.component';
import { UmlComponent } from './components/uml/uml.component';
import { VersionamientoComponent } from './components/versionamiento/versionamiento.component';

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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('componentes', { read: ViewContainerRef }) componentes!: ViewContainerRef;

  fechaActualizacion = '15/02/2021';

  porciento: any = porcentaje.subscribe((valor) => {
    this.porciento = valor;
  });

  public listaComponentes = [
    ArquitecturasComponent, BuenasPracticasComponent, FrameworksComponent, MalasPracticasComponent,
    MetodologiasComponent, OtrosComponent, ParadigmasComponent, PatronesComponent,
    RefactorizacionComponent, SectionsComponent, SqlNosqlComponent, CompilacionComponent,
    HistoriaUsuarioComponent, VersionamientoComponent, EstrategiasDesarrolloComponent, UmlComponent];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public crearComponent(component: any): void {
    const componente = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentes.clear();
    this.componentes.createComponent(componente);
  }

  public scrollToElement($element: any): void {
    if (typeof $element !== 'undefined') {
      $element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}

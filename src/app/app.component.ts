import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArquitecturasComponent } from './components/arquitecturas/arquitecturas.component';
import { BuenasPracticasComponent } from './components/buenas-practicas/buenas-practicas.component';
import { FrameworksComponent } from './components/frameworks/frameworks.component';
import { MalasPracticasComponent } from './components/malas-practicas/malas-practicas.component';
import { MetodologiasComponent } from './components/metodologias/metodologias.component';
import { OtrosComponent } from './components/otros/otros.component';
import { ParadigmasComponent } from './components/paradigmas/paradigmas.component';
import { PatronesComponent } from './components/patrones/patrones.component';
import { RefactorizacionComponent } from './components/refactorizacion/refactorizacion.component';
import { SectionsComponent } from './components/sections/sections.component';
import { SqlNosqlComponent } from './components/sql-nosql/sql-nosql.component';

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

  fechaActualizacion = '06/02/2021';

  porciento: any = porcentaje.subscribe((valor) => {
    this.porciento = valor;
  });

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  private crearComponent(component: any): void {
    const componentes = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    this.componentes.clear();
    this.componentes.createComponent(componentes);
  }

  public createComponentArquitecturas(): void {
    this.crearComponent(ArquitecturasComponent);
  }

  public createComponentBuenasPracticas(): void {
    this.crearComponent(BuenasPracticasComponent);
  }

  public createComponentFrameworks(): void {
    this.crearComponent(FrameworksComponent);
  }

  public createComponentMalasPracticas(): void {
    this.crearComponent(MalasPracticasComponent);
  }

  public createComponentMetodologias(): void {
    this.crearComponent(MetodologiasComponent);
  }

  public createComponentOtros(): void {
    this.crearComponent(OtrosComponent);
  }

  public createComponentParadigmas(): void {
    this.crearComponent(ParadigmasComponent);
  }

  public createComponentPatrones(): void {
    this.crearComponent(PatronesComponent);
  }

  public createComponentRefactorizacion(): void {
    this.crearComponent(RefactorizacionComponent);
  }

  public createComponentSections(): void {
    this.crearComponent(SectionsComponent);
  }

  public createComponentSqlNoSql(): void {
    this.crearComponent(SqlNosqlComponent);
  }

  public scrollToElement($element: any): void {
    if (typeof $element !== 'undefined') {
      $element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}

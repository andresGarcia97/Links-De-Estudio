import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArquitecturasComponent } from './components/arquitecturas/arquitecturas.component';
import { BuenasPracticasComponent } from './components/buenas-practicas/buenas-practicas.component';
import { CompilacionComponent } from './components/compilacion/compilacion.component';
import { FrameworksComponent } from './components/frameworks/frameworks.component';
import { MalasPracticasComponent } from './components/malas-practicas/malas-practicas.component';
import { MetodologiasComponent } from './components/metodologias/metodologias.component';
import { OtrosComponent } from './components/otros/otros.component';
import { ParadigmasComponent } from './components/paradigmas/paradigmas.component';
import { PatronesComponent } from './components/patrones/patrones.component';
import { RefactorizacionComponent } from './components/refactorizacion/refactorizacion.component';
import { ReferenciaComponent } from './components/referencia/referencia.component';
import { SectionsComponent } from './components/sections/sections.component';
import { SqlNosqlComponent } from './components/sql-nosql/sql-nosql.component';
import { HistoriaUsuarioComponent } from './components/historia-usuario/historia-usuario.component';
import { VersionamientoComponent } from './components/versionamiento/versionamiento.component';
import { EstrategiasDesarrolloComponent } from './components/estrategias-desarrollo/estrategias-desarrollo.component';
import { UmlComponent } from './components/uml/uml.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { GitComponent } from './components/git/git.component';
import { WebComponent } from './components/web/web.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
    ReferenciaComponent,
    ParadigmasComponent,
    ArquitecturasComponent,
    PatronesComponent,
    BuenasPracticasComponent,
    MalasPracticasComponent,
    RefactorizacionComponent,
    MetodologiasComponent,
    SqlNosqlComponent,
    FrameworksComponent,
    OtrosComponent,
    CompilacionComponent,
    HistoriaUsuarioComponent,
    VersionamientoComponent,
    EstrategiasDesarrolloComponent,
    UmlComponent,
    RequisitosComponent,
    PruebasComponent,
    GitComponent,
    WebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

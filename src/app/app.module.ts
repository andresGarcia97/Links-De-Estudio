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
import { ReferenciaComponent } from './components/core/referencia/referencia.component';
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
import { ConocimientosEmpiricosComponent } from './components/conocimientos-empiricos/conocimientos-empiricos.component';
import { FuentesComponent } from './components/fuentes/fuentes.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { DockerComponent } from './components/dockerC/docker.component';
import { PooComponent } from './components/poo/poo.component';
import { AgilesComponent } from './components/agiles/agiles.component';
import { SmellsCodesComponent } from './components/smells-codes/smells-codes.component';
import { MetaCaracteristicasComponent } from './components/meta-caracteristicas/meta-caracteristicas.component';
import { GlosarioComponent } from './components/glosario/glosario.component';
import { NubeComponent } from './components/nube/nube.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { ButtonComponent } from './components/core/button/button.component';
import { PersonasComponent } from './components/personas/personas.component';

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
    WebComponent,
    ConocimientosEmpiricosComponent,
    FuentesComponent,
    SeguridadComponent,
    AnalisisComponent,
    DockerComponent,
    PooComponent,
    AgilesComponent,
    SmellsCodesComponent,
    MetaCaracteristicasComponent,
    GlosarioComponent,
    NubeComponent,
    FilterPipe,
    ButtonComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

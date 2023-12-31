import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgilesComponent } from './components/agiles/agiles.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { ArquitecturasComponent } from './components/arquitecturas/arquitecturas.component';
import { BuenasPracticasComponent } from './components/buenas-practicas/buenas-practicas.component';
import { CalidadComponent } from './components/calidad/calidad.component';
import { CompilacionComponent } from './components/compilacion/compilacion.component';
import { ConocimientosEmpiricosComponent } from './components/conocimientos-empiricos/conocimientos-empiricos.component';
import { ContenedoresComponent } from './components/contenedores/contenedores.component';
import { CoreModule } from './components/core/core.module';
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
import { FilterPipe } from './pipes/filter.pipe';
import { HomeComponent } from './components/home/home.component';
import { NeuroMarketingComponent } from './components/neuro-marketing/neuro-marketing.component';
import { SqlNosqlAdvancedComponent } from './components/sql-nosql-advanced/sql-nosql-advanced.component';
import { CDCIComponent } from './components/cd-ci/cd-ci.component';
import { ApisTermsComponent } from './components/apis-terms/apis-terms.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipiosComponent,
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
    ContenedoresComponent,
    PooComponent,
    AgilesComponent,
    SmellsCodesComponent,
    MetaCaracteristicasComponent,
    GlosarioComponent,
    NubeComponent,
    FilterPipe,
    PersonasComponent,
    CalidadComponent,
    PruebasAvanzadasComponent,
    HardwareComponent,
    MetaEstructuraComponent,
    LeyesComponent,
    HomeComponent,
    NeuroMarketingComponent,
    SqlNosqlAdvancedComponent,
    CDCIComponent,
    ApisTermsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

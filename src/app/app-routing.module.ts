import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AGILES_KEY, ANALISIS_KEY, APIS_KEY, ARQUITECTURAS_KEY, BUENAS_PRACTICAS_KEY, CALIDAD_KEY, CARACTERISTICAS_KEY, CD_CI_KEY, COMPILACION_KEY,
  CONOCIMIENTO_EMPIRICO_KEY, CONTENEDORES_KEY, DATA_BASES_ADVANCED_KEY, DATA_BASES_KEY, ESTRATEGIAS_DESARROLLO_KEY, ESTRUCTURAS_KEY, FRAMEWORKS_KEY,
  GIT_KEY, HARDWARE_KEY, LEYES_KEY, MALAS_PRACTICAS_KEY, METODOLOGIAS_KEY, NEURO_MARKETING_KEY, NUBE_KEY, OTROS_KEY,
  PARADIGMAS_KEY, PATRONES_KEY, PERSONAS_KEY, POO_KEY, PRINCIPIOS_KEY, REFACTORIZACION_KEY, REQUISITOS_KEY, SEGURIDAD_KEY,
  SMELL_CODES_KEY, TESTING_ADVANCED_KEY, TESTING_KEY, UML_KEY, USER_HISTORIES_KEY, VERSIONAMIENTO_KEY, WEB_KEY
} from 'src/app/models/linkReferencia';
import { EstrategiasDesarrolloComponent } from './components/estrategias-desarrollo/estrategias-desarrollo.component';
import { FrameworksComponent } from './components/frameworks/frameworks.component';
import { FuentesComponent } from './components/fuentes/fuentes.component';
import { GitComponent } from './components/git/git.component';
import { GlosarioComponent } from './components/glosario/glosario.component';
import { HardwareComponent } from './components/hardware/hardware.component';
import { HistoriaUsuarioComponent } from './components/historia-usuario/historia-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { LeyesComponent } from './components/leyes/leyes.component';
import { MalasPracticasComponent } from './components/malas-practicas/malas-practicas.component';
import { MetaCaracteristicasComponent } from './components/meta-caracteristicas/meta-caracteristicas.component';
import { MetaEstructuraComponent } from './components/meta-estructura/meta-estructura.component';
import { MetodologiasComponent } from './components/metodologias/metodologias.component';
import { NeuroMarketingComponent } from './components/neuro-marketing/neuro-marketing.component';
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
import { SqlNosqlAdvancedComponent } from './components/sql-nosql-advanced/sql-nosql-advanced.component';
import { SqlNosqlComponent } from './components/sql-nosql/sql-nosql.component';
import { UmlComponent } from './components/uml/uml.component';
import { VersionamientoComponent } from './components/versionamiento/versionamiento.component';
import { WebComponent } from './components/web/web.component';

const routes: Routes = [

  { path: 'apis-terms', loadChildren: () => import('./components/apis-terms/apis-terms.module').then(m => m.ApisTermsModule), title: APIS_KEY  },
  { path: 'cd-ci-infraestructura', loadChildren: () => import('./components/cd-ci/cd-ci.module').then(m => m.CdCiModule), title: CD_CI_KEY },
  { path: 'neuro-marketing', component: NeuroMarketingComponent, title: NEURO_MARKETING_KEY },
  { path: 'hardware', component: HardwareComponent, title: HARDWARE_KEY },
  { path: 'leyes', component: LeyesComponent, title: LEYES_KEY },
  { path: 'meta-estructuras', component: MetaEstructuraComponent, title: ESTRUCTURAS_KEY },
  { path: 'testing-avanzado', component: PruebasAvanzadasComponent, title: TESTING_ADVANCED_KEY },
  { path: 'calidad', loadChildren: () => import('./components/calidad/calidad.module').then(m => m.CalidadModule), title: CALIDAD_KEY },
  { path: 'personas', component: PersonasComponent, title: PERSONAS_KEY },
  { path: 'nube', component: NubeComponent, title: NUBE_KEY },
  { path: 'glosario', component: GlosarioComponent, title: 'Glosario' },
  { path: 'fuentes', component: FuentesComponent, title: 'Fuentes' },
  { path: 'metacaracteristicas', component: MetaCaracteristicasComponent, title: CARACTERISTICAS_KEY },
  { path: 'smells-codes', component: SmellsCodesComponent, title: SMELL_CODES_KEY },
  { path: 'poo', component: PooComponent, title: POO_KEY },
  { path: 'contenedores', loadChildren: () => import('./components/contenedores/contenedores.module').then(m => m.ContenedoresModule), title: CONTENEDORES_KEY },
  { path: 'analisis', loadChildren: () => import('./components/analisis/analisis.module').then(m => m.AnalisisModule), title: ANALISIS_KEY },
  { path: 'seguridad', component: SeguridadComponent, title: SEGURIDAD_KEY },
  { path: 'conocimiento-empirico', loadChildren: () => import('./components/conocimientos-empiricos/conocimientos-empiricos.module').then(m => m.ConocimientosEmpiricosModule), title: CONOCIMIENTO_EMPIRICO_KEY },
  { path: 'web', component: WebComponent, title: WEB_KEY },
  { path: 'git', component: GitComponent, title: GIT_KEY },
  { path: 'testing', component: PruebasComponent, title: TESTING_KEY },
  { path: 'requisitos', component: RequisitosComponent, title: REQUISITOS_KEY },
  { path: 'uml', component: UmlComponent, title: UML_KEY },
  { path: 'estrategias-de-desarrollo', component: EstrategiasDesarrolloComponent, title: ESTRATEGIAS_DESARROLLO_KEY },
  { path: 'versionamiento', component: VersionamientoComponent, title: VERSIONAMIENTO_KEY },
  { path: 'historias-de-usuario', component: HistoriaUsuarioComponent, title: USER_HISTORIES_KEY },
  { path: 'compilacion', loadChildren: () => import('./components/compilacion/compilacion.module').then(m => m.CompilacionModule), title: COMPILACION_KEY },
  { path: 'bases-de-datos', component: SqlNosqlComponent, title: DATA_BASES_KEY },
  { path: 'bd-avanzado', component: SqlNosqlAdvancedComponent, title: DATA_BASES_ADVANCED_KEY },
  { path: 'principios', component: PrincipiosComponent, title: PRINCIPIOS_KEY },
  { path: 'refactorizacion', component: RefactorizacionComponent, title: REFACTORIZACION_KEY },
  { path: 'patrones', component: PatronesComponent, title: PATRONES_KEY },
  { path: 'paradigmas', component: ParadigmasComponent, title: PARADIGMAS_KEY },
  { path: 'otros', component: OtrosComponent, title: OTROS_KEY },
  { path: 'metodologias', component: MetodologiasComponent, title: METODOLOGIAS_KEY },
  { path: 'malas-practicas', component: MalasPracticasComponent, title: MALAS_PRACTICAS_KEY },
  { path: 'frameworks', component: FrameworksComponent, title: FRAMEWORKS_KEY },
  { path: 'buenas-practicas', loadChildren: () => import('./components/buenas-practicas/buenas-practicas.module').then(m => m.BuenasPracticasModule), title: BUENAS_PRACTICAS_KEY },
  { path: 'arquitecturas', loadChildren: () => import('./components/arquitecturas/arquitecturas.module').then(m => m.ArquitecturasModule), title: ARQUITECTURAS_KEY },
  { path: 'agiles', loadChildren: () => import('./components/agiles/agiles.module').then(m => m.AgilesModule), title: AGILES_KEY  },
  { path: '', component: HomeComponent, pathMatch: 'full', title: 'Inicio' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

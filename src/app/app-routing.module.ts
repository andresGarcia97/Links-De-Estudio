import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AGILES_KEY, ANALISIS_KEY, APIS_KEY, ARQUITECTURAS_KEY, BUENAS_PRACTICAS_KEY, CALIDAD_KEY, CARACTERISTICAS_KEY, CD_CI_KEY, COMPILACION_KEY,
  CONOCIMIENTO_EMPIRICO_KEY, CONTENEDORES_KEY, DATA_BASES_ADVANCED_KEY, DATA_BASES_KEY, ESTRATEGIAS_DESARROLLO_KEY, ESTRUCTURAS_KEY, FRAMEWORKS_KEY,
  GIT_KEY, HARDWARE_KEY, LEYES_KEY, MALAS_PRACTICAS_KEY, METODOLOGIAS_KEY, NEURO_MARKETING_KEY, NUBE_KEY, OTROS_KEY,
  PARADIGMAS_KEY, PATRONES_KEY, PERSONAS_KEY, POO_KEY, PRINCIPIOS_KEY, REFACTORIZACION_KEY, REQUISITOS_KEY, SEGURIDAD_KEY,
  SMELL_CODES_KEY, TESTING_ADVANCED_KEY, TESTING_KEY, UML_KEY, USER_HISTORIES_KEY, VERSIONAMIENTO_KEY, WEB_KEY
} from 'src/app/models/linkReferencia';
import { GlosarioComponent } from './components/glosario/glosario.component';
import { HomeComponent } from './components/home/home.component';
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
import { PrincipiosModule } from './components/principios/principios.module';

const routes: Routes = [

  { path: 'apis-terms', loadChildren: () => import('./components/apis-terms/apis-terms.module').then(m => m.ApisTermsModule), title: APIS_KEY  },
  { path: 'cd-ci-infraestructura', loadChildren: () => import('./components/cd-ci/cd-ci.module').then(m => m.CdCiModule), title: CD_CI_KEY },
  { path: 'neuro-marketing', loadChildren: () => import('./components/neuro-marketing/neuro-marketing.module').then(m => m.NeuroMarketingModule), title: NEURO_MARKETING_KEY },
  { path: 'hardware', loadChildren: () => import('./components/hardware/hardware.module').then(m => m.HardwareModule), title: HARDWARE_KEY },
  { path: 'leyes', loadChildren: () => import('./components/leyes/leyes.module').then(m => m.LeyesModule), title: LEYES_KEY },
  { path: 'meta-estructuras', loadChildren: () => import('./components/meta-estructura/meta-estructura.module').then(m => m.MetaEstructuraModule), title: ESTRUCTURAS_KEY },
  { path: 'testing-avanzado', component: PruebasAvanzadasComponent, title: TESTING_ADVANCED_KEY },
  { path: 'calidad', loadChildren: () => import('./components/calidad/calidad.module').then(m => m.CalidadModule), title: CALIDAD_KEY },
  { path: 'personas', loadChildren: () => import('./components/personas/personas.module').then(m => m.PersonasModule), title: PERSONAS_KEY },
  { path: 'nube', loadChildren: () => import('./components/nube/nube.module').then(m => m.NubeModule), title: NUBE_KEY },
  { path: 'glosario', component: GlosarioComponent, title: 'Glosario' },
  { path: 'fuentes', loadChildren: () => import('./components/fuentes/fuentes.module').then(m => m.FuentesModule), title: 'Fuentes' },
  { path: 'metacaracteristicas', loadChildren: () => import('./components/meta-caracteristicas/meta-caracteristicas.module').then(m => m.MetaCaracteristicasModule), title: CARACTERISTICAS_KEY },
  { path: 'smells-codes', component: SmellsCodesComponent, title: SMELL_CODES_KEY },
  { path: 'poo', loadChildren: () => import('./components/poo/poo.module').then(m => m.POOModule), title: POO_KEY },
  { path: 'contenedores', loadChildren: () => import('./components/contenedores/contenedores.module').then(m => m.ContenedoresModule), title: CONTENEDORES_KEY },
  { path: 'analisis', loadChildren: () => import('./components/analisis/analisis.module').then(m => m.AnalisisModule), title: ANALISIS_KEY },
  { path: 'seguridad', component: SeguridadComponent, title: SEGURIDAD_KEY },
  { path: 'conocimiento-empirico', loadChildren: () => import('./components/conocimientos-empiricos/conocimientos-empiricos.module').then(m => m.ConocimientosEmpiricosModule), title: CONOCIMIENTO_EMPIRICO_KEY },
  { path: 'web', component: WebComponent, title: WEB_KEY },
  { path: 'git', loadChildren: () => import('./components/git/git.module').then(m => m.GitModule), title: GIT_KEY },
  { path: 'testing', component: PruebasComponent, title: TESTING_KEY },
  { path: 'requisitos', component: RequisitosComponent, title: REQUISITOS_KEY },
  { path: 'uml', component: UmlComponent, title: UML_KEY },
  { path: 'estrategias-de-desarrollo',  loadChildren: () => import('./components/estrategias-desarrollo/estrategias-desarrollo.module').then(m => m.EstrategiasDesarrolloModule), title: ESTRATEGIAS_DESARROLLO_KEY },
  { path: 'versionamiento', component: VersionamientoComponent, title: VERSIONAMIENTO_KEY },
  { path: 'historias-de-usuario', loadChildren: () => import('./components/historia-usuario/historias-usuario.module').then(m => m.HistoriasUsuarioModule), title: USER_HISTORIES_KEY },
  { path: 'compilacion', loadChildren: () => import('./components/compilacion/compilacion.module').then(m => m.CompilacionModule), title: COMPILACION_KEY },
  { path: 'bases-de-datos', component: SqlNosqlComponent, title: DATA_BASES_KEY },
  { path: 'bd-avanzado', component: SqlNosqlAdvancedComponent, title: DATA_BASES_ADVANCED_KEY },
  { path: 'principios', loadChildren: () => import('./components/principios/principios.module').then(m => m.PrincipiosModule), title: PRINCIPIOS_KEY },
  { path: 'refactorizacion', component: RefactorizacionComponent, title: REFACTORIZACION_KEY },
  { path: 'patrones', loadChildren: () => import('./components/patrones/patrones.module').then(m => m.PatronesModule), title: PATRONES_KEY },
  { path: 'paradigmas', loadChildren: () => import('./components/paradigmas/paradigmas.module').then(m => m.ParadigmasModule), title: PARADIGMAS_KEY },
  { path: 'otros', loadChildren: () => import('./components/otros/otros.module').then(m => m.OtrosModule), title: OTROS_KEY },
  { path: 'metodologias', loadChildren: () => import('./components/metodologias/metodologias.module').then(m => m.MetodologiasModule), title: METODOLOGIAS_KEY },
  { path: 'malas-practicas', loadChildren: () => import('./components/malas-practicas/malas-practicas.module').then(m => m.MalasPracticasModule), title: MALAS_PRACTICAS_KEY },
  { path: 'frameworks', loadChildren: () => import('./components/frameworks/frameworks.module').then(m => m.FrameworksModule), title: FRAMEWORKS_KEY },
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

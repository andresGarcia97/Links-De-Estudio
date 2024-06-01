import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AGILES_KEY, ANALISIS_KEY, APIS_KEY, ARQUITECTURAS_KEY, BUENAS_PRACTICAS_KEY, CALIDAD_KEY, META_CARACTERISTICAS_KEY, CD_CI_KEY, COMPILACION_KEY,
  CONOCIMIENTO_EMPIRICO_KEY, CONTENEDORES_KEY, DATA_BASES_ADVANCED_KEY, DATA_BASES_KEY, ESTRATEGIAS_DESARROLLO_KEY, META_ESTRUCTURAS_KEY, FRAMEWORKS_KEY,
  GIT_KEY, HARDWARE_KEY, LEYES_KEY, MALAS_PRACTICAS_KEY, METODOLOGIAS_KEY, NEURO_MARKETING_KEY, NUBE_KEY, OTROS_KEY,
  PARADIGMAS_KEY, PATRONES_KEY, PEOPLE_KEY, POO_KEY, PRINCIPIOS_KEY, REFACTORIZACION_KEY, REQUISITOS_KEY, SECURITY_KEY,
  SMELL_CODES_KEY, TESTING_ADVANCED_KEY, TESTING_KEY, UML_KEY, USER_HISTORIES_KEY, VERSIONAMIENTO_KEY, WEB_KEY
} from 'src/app/models/linkReferencia';
import { GlosarioComponent } from './components/glosario/glosario.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path: 'apis', loadChildren: () => import('./components/apis-terms/apis-terms.module').then(m => m.ApisTermsModule), title: APIS_KEY  },
  { path: 'cd-ci-infraestructura', loadChildren: () => import('./components/cd-ci/cd-ci.module').then(m => m.CdCiModule), title: CD_CI_KEY },
  { path: 'neuro-marketing', loadChildren: () => import('./components/neuro-marketing/neuro-marketing.module').then(m => m.NeuroMarketingModule), title: NEURO_MARKETING_KEY },
  { path: 'hardware', loadChildren: () => import('./components/hardware/hardware.module').then(m => m.HardwareModule), title: HARDWARE_KEY },
  { path: 'leyes', loadChildren: () => import('./components/leyes/leyes.module').then(m => m.LeyesModule), title: LEYES_KEY },
  { path: 'meta-estructuras', loadChildren: () => import('./components/meta-estructura/meta-estructura.module').then(m => m.MetaEstructuraModule), title: META_ESTRUCTURAS_KEY },
  { path: 'testing-avanzado', loadChildren: () => import('./components/pruebas-avanzadas/pruebas-avanzadas.module').then(m => m.PruebasAvanzadasModule), title: TESTING_ADVANCED_KEY },
  { path: 'calidad', loadChildren: () => import('./components/calidad/calidad.module').then(m => m.CalidadModule), title: CALIDAD_KEY },
  { path: 'personas', loadChildren: () => import('./components/personas/personas.module').then(m => m.PersonasModule), title: PEOPLE_KEY },
  { path: 'nube', loadChildren: () => import('./components/nube/nube.module').then(m => m.NubeModule), title: NUBE_KEY },
  { path: 'glosario', component: GlosarioComponent, title: 'Glosario' },
  { path: 'fuentes', loadChildren: () => import('./components/fuentes/fuentes.module').then(m => m.FuentesModule), title: 'Fuentes' },
  { path: 'metacaracteristicas', loadChildren: () => import('./components/meta-caracteristicas/meta-caracteristicas.module').then(m => m.MetaCaracteristicasModule), title: META_CARACTERISTICAS_KEY },
  { path: 'smells-codes', loadChildren: () => import('./components/smells-codes/smells-codes.module').then(m => m.SmellsCodesModule), title: SMELL_CODES_KEY },
  { path: 'poo', loadChildren: () => import('./components/poo/poo.module').then(m => m.POOModule), title: POO_KEY },
  { path: 'contenedores', loadChildren: () => import('./components/contenedores/contenedores.module').then(m => m.ContenedoresModule), title: CONTENEDORES_KEY },
  { path: 'analisis', loadChildren: () => import('./components/analisis/analisis.module').then(m => m.AnalisisModule), title: ANALISIS_KEY },
  { path: 'seguridad', loadChildren: () => import('./components/seguridad/seguridad.module').then(m => m.SeguridadModule), title: SECURITY_KEY },
  { path: 'conocimiento-empirico', loadChildren: () => import('./components/conocimientos-empiricos/conocimientos-empiricos.module').then(m => m.ConocimientosEmpiricosModule), title: CONOCIMIENTO_EMPIRICO_KEY },
  { path: 'web', loadChildren: () => import('./components/web/web.module').then(m => m.WebModule), title: WEB_KEY },
  { path: 'git', loadChildren: () => import('./components/git/git.module').then(m => m.GitModule), title: GIT_KEY },
  { path: 'testing', loadChildren: () => import('./components/pruebas/pruebas.module').then(m => m.PruebasModule), title: TESTING_KEY },
  { path: 'requisitos', loadChildren: () => import('./components/requisitos/requisitos.module').then(m => m.RequisitosModule), title: REQUISITOS_KEY },
  { path: 'uml', loadChildren: () => import('./components/uml/uml.module').then(m => m.UMLModule), title: UML_KEY },
  { path: 'estrategias-de-desarrollo',  loadChildren: () => import('./components/estrategias-desarrollo/estrategias-desarrollo.module').then(m => m.EstrategiasDesarrolloModule), title: ESTRATEGIAS_DESARROLLO_KEY },
  { path: 'versionamiento', loadChildren: () => import('./components/versionamiento/versionamiento.module').then(m => m.VersionamientoModule), title: VERSIONAMIENTO_KEY },
  { path: 'historias-de-usuario', loadChildren: () => import('./components/historia-usuario/historias-usuario.module').then(m => m.HistoriasUsuarioModule), title: USER_HISTORIES_KEY },
  { path: 'compilacion', loadChildren: () => import('./components/compilacion/compilacion.module').then(m => m.CompilacionModule), title: COMPILACION_KEY },
  { path: 'bases-de-datos', loadChildren: () => import('./components/sql-nosql/sql-nosql.module').then(m => m.SqlNoSqlModule), title: DATA_BASES_KEY },
  { path: 'bd-avanzado', loadChildren: () => import('./components/sql-nosql-advanced/sql-nosql-advanced.module').then(m => m.SqlNoSqlAdvancedModule), title: DATA_BASES_ADVANCED_KEY },
  { path: 'principios', loadChildren: () => import('./components/principios/principios.module').then(m => m.PrincipiosModule), title: PRINCIPIOS_KEY },
  { path: 'refactorizacion', loadChildren: () => import('./components/refactorizacion/refactorizacion.module').then(m => m.RefactorizacionModule), title: REFACTORIZACION_KEY },
  { path: 'patrones', loadChildren: () => import('./components/patrones/patrones.module').then(m => m.PatronesModule), title: PATRONES_KEY },
  { path: 'paradigmas', loadChildren: () => import('./components/paradigmas/paradigmas.module').then(m => m.ParadigmasModule), title: PARADIGMAS_KEY },
  { path: 'otros', loadChildren: () => import('./components/otros/otros.module').then(m => m.OtrosModule), title: OTROS_KEY },
  { path: 'metodologias', loadChildren: () => import('./components/metodologias/metodologias.module').then(m => m.MetodologiasModule), title: METODOLOGIAS_KEY },
  { path: 'malas-practicas', loadChildren: () => import('./components/malas-practicas/malas-practicas.module').then(m => m.MalasPracticasModule), title: MALAS_PRACTICAS_KEY },
  { path: 'frameworks', loadChildren: () => import('./components/frameworks/frameworks.module').then(m => m.FrameworksModule), title: FRAMEWORKS_KEY },
  { path: 'buenas-practicas', loadChildren: () => import('./components/buenas-practicas/buenas-practicas.module').then(m => m.BuenasPracticasModule), title: BUENAS_PRACTICAS_KEY },
  { path: 'arquitecturas', loadChildren: () => import('./components/arquitecturas/arquitecturas.module').then(m => m.ArquitecturasModule), title: ARQUITECTURAS_KEY },
  { path: 'agiles', loadChildren: () => import('./components/agiles/agiles.module').then(m => m.AgilesModule), title: AGILES_KEY  },
  { path: '', component: HomeComponent, pathMatch: 'full', title: 'Contenido De Repaso' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

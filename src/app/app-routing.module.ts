import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { FuentesComponent } from './components/fuentes/fuentes.component';

const routes: Routes = [

  { path: 'hardware', component: HardwareComponent },
  { path: 'leyes', component: LeyesComponent },
  { path: 'meta-estructuras', component: MetaEstructuraComponent },
  { path: 'testing-avanzado', component: PruebasAvanzadasComponent },
  { path: 'calidad', component: CalidadComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'nube', component: NubeComponent },
  { path: 'glosario', component: GlosarioComponent },
  { path: 'fuentes', component: FuentesComponent },
  { path: 'metacaracteristicas', component: MetaCaracteristicasComponent },
  { path: 'smells-codes', component: SmellsCodesComponent },
  { path: 'poo', component: PooComponent },
  { path: 'contenedores', component: ContenedoresComponent },
  { path: 'analisis', component: AnalisisComponent },
  { path: 'seguridad', component: SeguridadComponent },
  { path: 'conocimiento-empirico', component: ConocimientosEmpiricosComponent },
  { path: 'web', component: WebComponent },
  { path: 'git', component: GitComponent },
  { path: 'testing', component: PruebasComponent },
  { path: 'requisitos', component: RequisitosComponent },
  { path: 'uml', component: UmlComponent },
  { path: 'estrategias-de-desarrollo', component: EstrategiasDesarrolloComponent },
  { path: 'versionamiento', component: VersionamientoComponent },
  { path: 'historias-de-usuario', component: HistoriaUsuarioComponent },
  { path: 'compilacion', component: CompilacionComponent },
  { path: 'bases-de-datos', component: SqlNosqlComponent },
  { path: 'principios', component: PrincipiosComponent },
  { path: 'refactorizacion', component: RefactorizacionComponent },
  { path: 'patrones', component: PatronesComponent },
  { path: 'paradigmas', component: ParadigmasComponent },
  { path: 'otros-temas', component: OtrosComponent },
  { path: 'metodologias', component: MetodologiasComponent },
  { path: 'malas-practicas', component: MalasPracticasComponent },
  { path: 'frameworks', component: FrameworksComponent },
  { path: 'buenas-practicas', component: BuenasPracticasComponent },
  { path: 'arquitecturas', component: ArquitecturasComponent },
  { path: 'agiles', component: AgilesComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

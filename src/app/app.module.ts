import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionsComponent } from './components/sections/sections.component';
import { ReferenciaComponent } from './components/referencia/referencia.component';
import { ParadigmasComponent } from './components/paradigmas/paradigmas.component';
import { ArquitecturasComponent } from './components/arquitecturas/arquitecturas.component';
import { PatronesComponent } from './components/patrones/patrones.component';
import { BuenasPracticasComponent } from './components/buenas-practicas/buenas-practicas.component';
import { MalasPracticasComponent } from './components/malas-practicas/malas-practicas.component';
import { RefactorizacionComponent } from './components/refactorizacion/refactorizacion.component';
import { MetodologiasComponent } from './components/metodologias/metodologias.component';
import { SqlNosqlComponent } from './components/sql-nosql/sql-nosql.component';
import { FrameworksComponent } from './components/frameworks/frameworks.component';
import { OtrosComponent } from './components/otros/otros.component';
import { CompilacionComponent } from './components/compilacion/compilacion.component';

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
    CompilacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

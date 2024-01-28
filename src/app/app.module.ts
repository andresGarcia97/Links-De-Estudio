import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './components/core/core.module';
import { GlosarioComponent } from './components/glosario/glosario.component';
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
import { SqlNosqlAdvancedComponent } from './components/sql-nosql-advanced/sql-nosql-advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    RefactorizacionComponent,
    SqlNosqlComponent,
    VersionamientoComponent,
    UmlComponent,
    RequisitosComponent,
    PruebasComponent,
    WebComponent,
    SeguridadComponent,
    SmellsCodesComponent,
    GlosarioComponent,
    FilterPipe,
    PruebasAvanzadasComponent,
    HomeComponent,
    SqlNosqlAdvancedComponent,
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

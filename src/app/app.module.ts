import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { FormacionAcademicaComponent } from './componentes/formacion-academica/formacion-academica.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { DatosInteresComponent } from './componentes/datos-interes/datos-interes.component'

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    DatosPersonalesComponent,
    FormacionAcademicaComponent,
    ExperienciaLaboralComponent,
    DatosInteresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

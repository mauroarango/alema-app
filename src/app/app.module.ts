import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarranavegacionComponent } from './plantilla/barranavegacion/barranavegacion.component';
import { PiedepaginaComponent } from './plantilla/piedepagina/piedepagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    BarranavegacionComponent,
    PiedepaginaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

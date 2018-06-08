import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RutaInicioComponent } from './ruta-inicio/ruta-inicio.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS_APP,
      {
        useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

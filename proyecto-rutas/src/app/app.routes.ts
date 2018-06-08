import {Routes} from "@angular/router";
import {RutaInicioComponent} from "./ruta-inicio/ruta-inicio.component";
import {RutaNoEncontradaComponent} from "./ruta-no-encontrada/ruta-no-encontrada.component";

export const RUTAS_APP: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNoEncontradaComponent
  }
];

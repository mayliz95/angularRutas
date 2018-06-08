import {Routes} from "@angular/router";
import {RutaInicioComponent} from "./ruta-inicio/ruta-inicio.component";
import {RutaNoEncontradaComponent} from "./ruta-no-encontrada/ruta-no-encontrada.component";
import {FAQComponent} from "./faq/faq.component";
import {RutaIniUsuarioComponent} from "./ruta-ini-usuario/ruta-ini-usuario.component";
import {RutaIniPermisosComponent} from "./ruta-ini-permisos/ruta-ini-permisos.component";

export const RUTAS_APP: Routes = [
  {
    path: 'inicio/hola/como/estas',
    component: RutaInicioComponent,
    children: [
      {
        path: 'usuario',
        component: RutaIniUsuarioComponent
      },
      {
        path: 'permisos',
        component: RutaIniPermisosComponent
      },
      {
        path: '',
        redirectTo: 'usuario',
        pathMatch: 'full'
      },

    ]
  },
  {
    path: 'FAQ',
    component: FAQComponent
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

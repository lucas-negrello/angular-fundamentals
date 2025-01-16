import { Routes } from '@angular/router';
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";

// LAZY-LOADING
export const routes: Routes = [
  // {
  //   path: '',
  //   title: 'Inicial',
  //   component: InitialComponent
  // },
  {
    path: '',
    title: 'Inicial',
    // component: InitialComponent,
    redirectTo: '/componentes',
    pathMatch: 'full',
  },
  {
    path: 'componentes',
    title: 'Base',
    loadComponent: () =>
      import('./components/base/base.component').then(m => m.BaseComponent)
  },
  {
    path: 'componentes/primeiro',
    title: 'Primeiro',
    loadChildren: () =>
      import('./components/primeiro/primeiro.routes').then(m => m.PrimeiroRoutes)
  },
  {
    path: 'componentes/segundo',
    title: 'Segundo',
    loadComponent: () =>
      import('./components/segundo/segundo.component').then(m => m.SegundoComponent)
  },



  {
    path: '**',
    title: 'Not Found',
    component: NotFoundPageComponent
  }
];

// export const routes: Routes = [
//   { path: 'componentes', component: BaseComponent },
//   { path: 'componentes/primeiro', component: PrimeiroComponent },
//   { path: 'componentes/segundo', component: SegundoComponent },
// ];

// export const routes: Routes = [
//   { path: 'primeiro', component: PrimeiroComponent },
//   { path: 'segundo', component: SegundoComponent },
// ];

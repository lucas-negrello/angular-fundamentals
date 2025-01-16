import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Início',
    loadComponent: () =>
      import('./components/initial/initial.component').then(m => m.InitialComponent)
  },
  {
    path: 'general',
    title: 'Geral',
    loadChildren: () =>
      import('./components/general/general.routes').then(m => m.generalRoutes)
  },
  {
    path: 'transactions',
    title: 'Transações',
    loadChildren: () =>
      import('./components/transactions/transactions.routes').then(m => m.transactionsRoutes)
  },
  {
    path: '**',
    title: 'Página Não Encontrada',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];

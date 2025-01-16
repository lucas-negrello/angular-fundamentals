import {Routes} from "@angular/router";

export const transactionsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./transactions.component').then(m => m.TransactionsComponent),
    children: [
      {
        path: 'credit',
        title: 'Crédito',
        loadComponent: () =>
          import('./credit/credit.component').then(m => m.CreditComponent),
      },
      {
        path: 'debit',
        title: 'Débito',
        loadComponent: () =>
          import('./debit/debit.component').then(m => m.DebitComponent),
      }
    ]
  }
]

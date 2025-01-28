import {Routes} from "@angular/router";

export const CardsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'debit',
    pathMatch: 'full',
  },
  {
    path: 'debit',
    loadComponent: () =>
      import('./components/debit/debit.component')
        .then(m => m.DebitComponent),
    title: 'Debit',
  },
  {
    path: 'credit',
    loadComponent: () =>
      import('./components/credit/credit.component')
        .then(m => m.CreditComponent),
    title: 'Credit',
  },
  {
    path: ':cardId',
    loadComponent: () =>
      import('./components/card/card.component')
        .then(m => m.CardComponent),
    title: 'Card',
  }
]

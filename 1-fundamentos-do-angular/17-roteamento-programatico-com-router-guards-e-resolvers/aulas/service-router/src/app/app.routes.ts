import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/initial',
    pathMatch: 'full',
  },
  {
    path: 'initial',
    loadComponent: () =>
      import('./components/initial/initial.component')
        .then(m => m.InitialComponent),
    title: 'Inicial',
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./components/contacts/contacts.component')
        .then(m => m.ContactsComponent),
    title: 'Contatos',
  },
  {
    path: 'informations',
    loadComponent: () =>
      import('./components/informations/informations.component')
        .then(m => m.InformationsComponent),
    title: 'Informations',
  },
  {
    path: 'cards',
    loadComponent: () =>
      import('./components/cards/cards.component')
        .then(m => m.CardsComponent),
    title: 'Cards',
    loadChildren: () =>
      import('./components/cards/cards.routes')
        .then(r => r.CardsRoutes)
  }
];

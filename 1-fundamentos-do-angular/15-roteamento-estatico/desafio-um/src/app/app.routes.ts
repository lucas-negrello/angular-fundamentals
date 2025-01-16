import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'informations',
    loadComponent: () =>
      import('./components/informations/informations.component')
        .then(m => m.InformationsComponent)
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./components/contacts/contacts.component')
        .then(m => m.ContactsComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component')
        .then(m => m.AboutComponent)
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('./components/logout/logout.component')
        .then(m => m.LogoutComponent)
  }

];

import {Routes} from "@angular/router";

export const generalRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./general.component').then(m => m.GeneralComponent),
    children: [
      {
        path: '',
        title: 'Básica',
        loadComponent: () =>
          import('./basic/basic.component').then(m => m.BasicComponent),
      },
      {
        path: 'contact',
        title: 'Contato',
        loadComponent: () =>
          import('./contact/contact.component').then(m => m.ContactComponent),
      },
      {
        path: 'address',
        title: 'Endereço',
        loadComponent: () =>
          import('./address/address.component').then(m => m.AddressComponent),
      },
    ]
  },
]

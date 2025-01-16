import {Routes} from "@angular/router";
import {FilhoAComponent} from "./components/filho-a/filho-a.component";
import {FilhoBComponent} from "./components/filho-b/filho-b.component";
import {PrimeiroComponent} from "./primeiro.component";

export const PrimeiroRoutes: Routes = [
  {
    path: '',
    component: PrimeiroComponent,
    children: [
      {
        path: '',
        title: 'Filho A',
        component: FilhoAComponent
      },
      {
        path: 'filho-b',
        title: 'Filho B',
        component: FilhoBComponent
      },
      {
        path: 'redirect-b',
        redirectTo: 'filho-b',
      },
      {
        path: 'redirect-a',
        redirectTo: ''
      }
    ]
  }
]

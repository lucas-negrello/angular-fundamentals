import { Routes } from '@angular/router';
import {Comp1Component} from "./components/comp1/comp1.component";
import {GenericComponent} from "./components/generic/generic.component";

export const routes: Routes = [
  {
    path: 'comp1',
    component: Comp1Component
  },
  {
    path: 'comp1-2',
    component: Comp1Component
  },
  {
    path: 'comp1-3',
    component: Comp1Component
  },
  {
    path: 'generic-user',
    component: GenericComponent,
    data: {
      role: 'user'
    }
  },
  {
    path: 'generic-admin',
    component: GenericComponent,
    data: {
      role: 'admin'
    }
  },
];

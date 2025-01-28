import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {NonAuthorizedComponent} from "./components/non-authorized/non-authorized.component";
import {GeneralComponent} from "./components/general/general.component";
import {PaymentsComponent} from "./components/payments/payments.component";
import {AdminComponent} from "./components/admin/admin.component";
import {DebitComponent} from "./components/debit/debit.component";
import {CreditComponent} from "./components/credit/credit.component";
import {authGuard} from "./guards/auth.guard";
import {authWithScopesGuard} from "./guards/auth-with-scopes.guard";
import {scopesGuard} from "./guards/scopes.guard";
import {walletGuard} from "./guards/wallet.guard";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {generalInfosResolver} from "./resolvers/general-infos.resolver";
import {logoutGuard} from "./guards/logout.guard";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authWithScopesGuard('dashboard')],
    canActivateChild: [authGuard],
    canDeactivate: [logoutGuard],
    children: [
      { path: '', redirectTo: 'general', pathMatch: 'full' },
      {
        path: 'general',
        // Os valores do resolver ficam disponiveis no data do componente
        resolve: {
          generalInfos: generalInfosResolver
        },
        component: GeneralComponent
      },
      { path: 'payments',
        component: PaymentsComponent,
        canActivate: [scopesGuard('pagamentos')],
        children: [
          {
            path: '',
            canActivateChild: [walletGuard],
            children: [
              { path: 'debit', component: DebitComponent },
              { path: 'credit', component: CreditComponent },
            ]
          },
          { path: 'contacts', component: ContactsComponent },
        ]
      },
      { path: 'admin',
        canActivate: [scopesGuard('admin')],
        component: AdminComponent }
    ]
  },
  { path: 'not-authorized', component: NonAuthorizedComponent, data: { type: 'non-authorized'} },
  { path: 'not-found', component: NonAuthorizedComponent, data: { type: 'not-found'} },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

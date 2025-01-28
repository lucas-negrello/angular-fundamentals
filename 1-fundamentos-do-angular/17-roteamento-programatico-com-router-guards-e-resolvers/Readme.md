## Roteamento Programático

### Diretiva RouterLink x Service ActivatedRoute x Service Router

- ***Diretiva RouterLink:*** 
  - Fazer a navegação entre rotas a partir do template do componente;
  - É possivel passar QueryStrings, configurar como elas vão se comportar e passar QueryParams.
- ***Service ActivatedRoute:***
  - Possui todas as informações nececssárias da rota atual (QueryParams, QueryStrings, data, title, ...);
  - Serve para inicializar o componente com os dados da rota;
  - Não faz a navegação entre rotas.
- ***Service Router:***
  - Faz a navegação entre rotas de forma programática;
  - É possível fazer a configuração de QueryParams, QueryStrings, acessar o estado da rota,
    interceptar eventos de navegação, trabalhar com Guards e Resolvers, criar URLs de forma dinâmica, ...

### Service Router - Método Navigate()

- O método navigate recebe como parametros:
  - Um array de fragmentos de URL;
  - Um objeto com configuraçcões.

**Parâmetro de URL**

- Pode conter um caminho absoluto:

  `this._router.navigate(['path', 'to', 'some', 'route']);`
  - path/to/some/route

  `this._router.navigate(['/path/to/some/route']);`
  - path/to/some/route

- Pode conter um caminho relativo:

  `this._router.navigate(['../newRoute'], { relativeTo: this._route })`
  - path antes do navigate: 'path/to/some/route'
  - path apos o navigate: 'path/to/some/newRoute'
  - O parametro `relativeTo` recebe uma instancia de `ActivatedRoute`,
    podendo receber a rota atual, ou ser relativo a alguma outra rota.

**Objeto de Configurações**

- relativeTo: Recebe uma instancia de `ActivatedRoute`, indicando que a URL
  é relativa a rota passada neste parametro.
- queryParams: Recebe parametros do tipo queryParams, que podem ser lidos no
  componente ou, dependendo da estratégia de handling, serem concatenados ou preservados
  em outra rota.
- queryParamsHandling: Altera a estratégia padrão de queryParams, que é `replace`.
  - `replace`: substitui os valores de queryParams;
  - `merge`: concatena os valores com os da rota navegada. Caso o valor já exista, será substituido.
  - `preserve`: preserva os parametros da rota. Caso seja passado valores novos, serão ignorados.

### RouteGuard:

- É uma guarda de rota, que pode executar uma lógica ao acessar determinada rota,
  determinados conjuntos de rotas, ou ao deixar alguma rota.
- Retorna sempre true ou false. Caso seja true, permite o acesso a rota, caso seja false,
  inibe o acesso a rota.

**CanActivate**

- É acionado quando uma rota vai ser acionada, antes de acessar a rota.
- Ex.:

```ts
  export const route = [
    {
      path: 'admin',
      canActivate: [scopesGuard('admin')],
      component: AdminComponent 
    }
  ]
```
```ts
  import {CanActivateFn, GuardResult, MaybeAsync, Router} from '@angular/router';
  import {AuthService} from "../services/auth.service";
  import {inject} from "@angular/core";
  
  export const scopesGuard = (scope: string): CanActivateFn => {
    return (): MaybeAsync<GuardResult> => {
      const authService: AuthService = inject(AuthService);
      const router: Router = inject(Router);
  
      const userScopes = authService.getUserScopes();
  
      if(userScopes.find((userScope => userScope === scope))){
        return true;
      } else {
        return router.navigate(['not-authorized']);
      }
    }
  };
```

- Pode ser usado para os componentes children, todos ou alguns.
- Ex.:

```ts
// NESTE CASO, A ROTA CONTACTS NAO ESTA PROTEGIDA PELA WALLET GUARD, ENQUANTO
// A ROTA DEBIT E CREDIT SIM. ALEM DISSO, TODAS ROTAS ESTAO PROTEGIDAS PELA
// SCOPE GUARD

  export const routes = [
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
  ]
```
```ts
  import {CanActivateFn, GuardResult, MaybeAsync} from '@angular/router';
  import {AuthService} from "../services/auth.service";
  import {inject} from "@angular/core";
  
  export const walletGuard: CanActivateFn = () => {
    const authService: AuthService = inject(AuthService);
    if(authService.getUserWalletStatus() === 'active') {
      return true;
    }
    else {
      return false;
    }
  };
```

**CanDeactivate**

- É ativada quando for sair de uma rota. Tem acesso a rota atual, a rota em que
  quer se ter acesso, o componente que a guard está sendo chamada e o estado da
  rota chamada.
- Ex.:

```ts
  export const routes = [
      {
          path: 'dashboard',
          component: DashboardComponent,
          canDeactivate: [logoutGuard],
          children: [
              {
                  path: 'general',
                  component: GeneralComponent
              },
          ]
      }
  ]
```
```ts
  import {ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot} from '@angular/router';
  import {DashboardComponent} from "../components/dashboard/dashboard.component";
  import {inject} from "@angular/core";
  import {AuthService} from "../services/auth.service";
  
  export const logoutGuard: CanDeactivateFn<DashboardComponent> = 
          (
              component: DashboardComponent, 
              currentRoute: ActivatedRouteSnapshot, 
              currentState: RouterStateSnapshot, 
              nextState: RouterStateSnapshot
          ) => {
    if(nextState.url === '/login'){
      const authService = inject(AuthService);
      const confirmation = confirm('Deseja realmente sair?');
      if (confirmation) {
        authService.logout();
        return true;
      } else {
        return false;
      }
    }
    return true;
  };
```

### Resolvers:

- Resolvers são chamados nas rotas para processar dados durante o acesso do componente.
- Esses dados ficam acessíveis para o componente através da propriedade `data` do `ActivateRoute`.
- O resolver, diferentemente do Guard, é um Object, não um Array.
- Ex.:

***route.ts***
```ts
  export const route = [
          ...
                  {
                    path: 'general',
                    // Os valores do resolver ficam disponiveis no data do componente
                    resolve: {
                      generalInfos: generalInfosResolver
                    },
                    component: GeneralComponent
                  },
          ...
  ]
```
***general-infos-resolver.ts***
```ts
  import { ResolveFn } from '@angular/router';
  import {GeneralInfosService} from "../services/general-infos.service";
  import {inject} from "@angular/core";
  import {firstValueFrom} from "rxjs";
  
  export const generalInfosResolver: ResolveFn<any> = () => {
    const generalInfoService: GeneralInfosService = inject(GeneralInfosService);
    return Promise.all([
      firstValueFrom(generalInfoService.getIncidents()),
      firstValueFrom(generalInfoService.getPendingPayments()),
      firstValueFrom(generalInfoService.getNewAccounts()),
      firstValueFrom(generalInfoService.getActiveUsers()),
    ]).then(([incidents, pendingPayments, newAccounts, activeUsers]) =>
    {
      return {
        incidents,
        pendingPayments,
        newAccounts,
        activeUsers,
      }
    })
  };
```
***general.component.ts***
```ts
  import { Component } from '@angular/core';
  import {ActivatedRoute, Data} from "@angular/router";
  import {Observable, of} from "rxjs";
  import {AsyncPipe} from "@angular/common";
  
  @Component({
    selector: 'app-general',
    standalone: true,
    imports: [
      AsyncPipe
    ],
    template: `
      @if (data$ | async; as data;){
        <div class="general">
          <div class="general__row">
            <div class="general__card">
              <p class="poppins-regular">Incidentes no Dia:</p>
              <p class="poppins-semibold">{{data['generalInfos'].incidents.day}}</p>
            </div>
            <div class="general__card">
              <p class="poppins-regular">Pagamentos Pendentes:</p>
              <p class="poppins-semibold">{{data['generalInfos'].pendingPayments.pending}}</p>
            </div>
          </div>
          <div class="general__row">
            <div class="general__card">
              <p class="poppins-regular">Contas Criadas:</p>
              <p class="poppins-semibold">+ {{data['generalInfos'].newAccounts.accounts}}/dia</p>
            </div>
            <div class="general__card">
              <p class="poppins-regular">Usuários Ativos:</p>
              <p class="poppins-semibold">{{data['generalInfos'].activeUsers.users}}</p>
            </div>
          </div>
        </div>
      }
    `,
    styleUrl: './general.component.scss'
  })
  export class GeneralComponent {
    data$: Observable<Data> = of({});
  
    constructor(private readonly _route: ActivatedRoute) {}
  
    ngOnInit() {
      this.data$ = this._route.data;
    }
  }
```
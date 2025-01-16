## Roteamento Estático

- O roteamento estático consiste em definir as rotas no arquivo `app.routes.ts`;
- Como é o funcionamento:
  - O arquivo `main.ts` contem a função `bootstrapApplication()`
  que recebe como parametro o `AppComponent` e o `appConfig`, que é
  exportado do arquivo `app.config.ts`. Essa função tem o objetivo
  de renderizar o `AppComponent` como componente inicial da aplicação.
  - O arquivo `app.config.ts` possui a configuração de um provider, inicialmente,
  que configura o provider de rotas, com a função `providerRouter(routes)`, onde
  `routes` é um array de objetos contendo as rotas da aplicação do arquivo `app.routes.ts`.
  - No arquivo `app.routes.ts`, temos uma constante chamada `routes`, que é
  exportada. Essa constante contem um array que irá conter as rotas e suas
  configurações. Essas configurações são:

```ts
export const routes = [
    {
        // Caminho do endpoint
        path: 'nome-do-endpoint',
        // Componente renderizado ao acessar o endpoint
        component: Component
    }
]
```

- Porém, ao definir uma rota, não vamos conseguir renderizá-la apenas
definindo-a no `app.routes.ts` e acessando seu endpoint. Para renderizar
o componente, devemos usar dentro de `app.component.html` a diretiva
`<router-outlet></router-outlet>`.
- A diretiva `router-outlet`, importada no `app.component.ts` de RouterOutlet,
é um listener, que fica ouvindo as mudanças de endpoints e definindo qual
componente deve ser renderizado através dele, conforme o `routes` do arquivo de rotas.
- Os componentes carregados pelo `router-outlet` serão carregados logo após a tag `<router-outlet>`

### Redirecionamento entre Rotas pelo RouterLink

- Para acessar uma rota via diretiva `routerLink`, devemos passar o `path` como parametro dela.

```angular181html
    <a routerLink="'/primeiro'">Primeiro Componente</a>
    <a routerLink="'/segundo'">Segundo Componente</a>
```

- Sempre que um componente é renderizado, ele acessa o método `ngOnInit()` daquele componente.
- Sempre que um componente para de ser renderizado, é acessado o método `ngOnDestroy()` daquele componente.

***O Angular trabalha como uma SPA \- Single Page Application \- que faz com que não seja recarregada a página***

**SPA mantem o estado, o que é um recurso importante para uma aplicação**

### RouterLinkActive - Aplicando CSS a um Item de acordo com a Rota Ativada

- Quando aplicamos a diretiva `routerLinkActive` a um elemento, quando o 
`routerLink` mais próximo for acionado, a classe passada para ela será
aplicada no elemento:

```angular181html
    <div class="menu">
        <div class="menu__item" routerLinkActive="menu__item--selected">
            <a routerLink="/primeiro" class="menu__link">Primeiro</a>
        </div>
        <div class="menu__item" routerLinkActive="menu__item--selected">
            <a routerLink="/segundo" class="menu__link">Segundo</a>
        </div>
    </div>
```
- Podemos, também, aplicar múltiplas classes:

```angular181html
    <div class="menu__item" routerLinkActive="class1 class2">
        <a routerLink="/primeiro" class="menu__link">Primeiro</a>
    </div>

<!--OU PODEMOS USAR COMO INPUT-->

    <div class="menu__item" [routerLinkActive]="['class1', 'class2']">
        <a routerLink="/primeiro" class="menu__link">Primeiro</a>
    </div>
```

- Podemos acessar a propriedade `isActive` da instancia de `routerLinkActive`:

```angular181html
    <div
            #primeiroRLA="routerLinkActive"
            routerLinkActive="class">
        <a routerLink="/primeiro">Primeiro</a>
    </div>

    // CASO ESTEJA NA ROTA, SERÁ TRUE
    <p>Primeiro ativo? {{ primeiroRLA.isActive }}</p>
```

- A diretiva `RouterLinkActive` possui o input `RouterLinkActiveOptions`, que recebe algumas configurações.
- Uma das configurações é o `{exact: true}`.
- Essa configuração serve para informar ao `RouterLinkActive` que ele só será
disparado caso a rota seja exatamente igual.

```angular181html
<!-- O ELEMENTO BASE POSSUI A ROTA /componentes, QUE TAMBÉM FAZ PARTE-->
<!-- DA ROTA DE PRIMEIRO, QUE É /componentes/primeiro-->
<!-- CASO NAO SEJA PASSADO {exact: true} EM [routerLinkActiveOptions]-->
<!-- QUANDO A ROTA DE /componentes/primeiro FOR RESOLVIDA, VAI MARCAR-->
<!-- COMO RESOLVIDA TAMBÉM A ROTA DE /componentes-->
  <div
          class="menu__item"
          routerLinkActive="menu__item--selected"
          [routerLinkActiveOptions]="{exact: true}"
  >
    <a routerLink="/componentes" class="menu__link">Base</a>
  </div>


  <div
          class="menu__item"
          routerLinkActive="menu__item--selected"
          [routerLinkActiveOptions]="{exact: true}"
  >
    <a routerLink="/componentes/primeiro" class="menu__link">Primeiro</a>
  </div>
```

### Lazy-loading

- Faz o carregamento, apenas, do que está sendo utilizado, reduzindo
o tamanho dos bundles.
- Ideal para aplicações maiores, para ter mais agilidade.
- O Lazy-Loading retorna uma promise, e é chamado pelo `loadComponent`
no arquivo `app.routes.ts`

```ts
  export const routes: Routes = [
    {
      path: 'componentes',
      loadComponent: () =>
              import('./components/base/base.component').then(m => m.BaseComponent)
    },
    {
      path: 'componentes/primeiro',
      loadComponent: () =>
              import('./components/primeiro/primeiro.component').then(m => m.PrimeiroComponent)
    },
    { path: 'componentes/segundo',
      loadComponent: () =>
              import('./components/segundo/segundo.component').then(m => m.SegundoComponent)
    }
  ];
```

### Como redirecionar para uma página de 404 Not Found

- Caso um endpoint nao existente seja acessado, é possivel carregar um
componente padrão para ser mostrado:

```ts
  export const routes: Routes = [
      // OUTRAS ROTAS
          
          
      // ESTA SERÁ SEMPRE A ULTIMA ROTA DEFINIDA
      // SE FOR DEFINIDA COMO PRIMEIRA, SEMPRE SERÁ CARREGADA
    {
      path: '**',
      component: NotFoundPageComponent
    }
  ];
```

### Como configurar o título da Aplicação

- Para configurar o title da rota basta apenas definir a propriedade `title` dentro da configuração da rota:

```ts
export const routes: Routes = [
  {
    path: '',
    title: 'Inicial',
    component: InitialComponent
  },
  // MESMA COISA PARA OUTRAS ROTAS
]
```

### Nesting Routes (Rotas Filhas)

- São rotas que podem existir dentro de outras rotas, renderizando componentes
dentro de componentes.
- Para configurar uma rota filha, se usa a propriedade `children`:

```ts
export const routes: Routes = [
  {
    path: 'componentes/primeiro',
    title: 'Primeiro',
    component: PrimeiroComponent,
    children: [
      {
        path: 'filho-a',
        title: 'Filho A',
        component: FilhoAComponent
      },
      {
        path: 'filho-b',
        title: 'Filho B',
        component: FilhoBComponent
      }
    ]
  },
]
```

- Deste modo, quando acessarmos a rota `componentes/primeiro/filho-a` iremos renderizar
o componente `FilhoAComponent`.
- Dentro do componente `primeiro.component.html` teremos que configurar o `<router-outlet>`
para que as rotas filhas sejam carregadas dentro dele:

```angular181html
<!-- NOTE QUE PARA ACESSAR OS COMPONENTES FILHOS DE PrimeiroComponent DENTRO-->
<!-- DO primeiro.component.html, NÓS PODEMOS USAR A ROTA RELATIVA, APENAS NÃO-->
<!-- USANDO A "/" ANTES DA ROTA NO ROUTERLINK. ESTE MODO DE CONFIGURAR O ROUTERLINK-->
<!-- FAZ UM ROTEAMENTO RELATIVO AO COMPONENTE. CASO QUISESSEMOS, PODERIAMOS, TAMBÉM,-->
<!-- PASSAR A ROTA /componentes/primeiro/filho-a, ISSO TERIA O MESMO RESULTADO,-->
<!-- PORÉM, USANDO A ROTA ABSOLUTA PARA O COMPONENTE.-->
<a routerLink="filho-a">Filho A</a><br>
<a routerLink="filho-b">Filho B</a>

<router-outlet></router-outlet>
```

- Para definir um componente filho padrão para já ser mostrado ao carregar o pai,
podemos definir um filho com o `path` vazio, que irá acabar carregando o componente
relacionado ao `path` vazio.

```ts
export const routes: Routes = [
  {
    path: 'componentes/primeiro',
    title: 'Primeiro',
    component: PrimeiroComponent,
    children: [
      {
        // DESTE MODO, SEMPRE QUE O COMPONENTE PRIMEIRO FOR CARREGADO,
        // TAMBÉM SERÁ CARREGADO O COMPONENTE FILHO A.
        path: '',
        title: 'Filho A',
        component: FilhoAComponent
      },
      {
        path: 'filho-b',
        title: 'Filho B',
        component: FilhoBComponent
      }
    ]
  },
]
```

- Neste caso, para configurar um `routerLink` relativo para o componente filho-a
devemos usar `'./'`:

```angular181html
<!-- ESTE SERÁ O CAMINHO RELATIVO PARA O FILHO A CASO O PATH DELE SEJA VAZIO-->
  <a routerLink="./">Filho A</a><br>
  <a routerLink="filho-b">Filho B</a>
  
  <router-outlet></router-outlet>
```

### RedirectTo

- Serve para fazermos um redirecionamento de uma rota para outra.
- Deve ser configurado contendo um caminho absoluto ou relativo.
- Sempre que `redirectTo` for usado, a propriedade `pathMatch` deve ser definida:
  - Ela pode ser `full`: Sempre que o `path` for '';
  - Ela pode ser `prefix`: 

```ts
export const routes: Routes = [
  {
    path: '',
    title: 'Inicial',
    redirectTo: '/componentes',
    pathMatch: 'full',
  },
  {
    path: 'componentes',
    title: 'Base',
    loadComponent: () =>
            import('./components/base/base.component').then(m => m.BaseComponent)
  },
]
```

### Lazy-Loading de Nested Routes de forma Modular

- Para fazer um lazyLoading, usamos o `loadChildren`.
- Criamos um arquivo de rotas onde gostariamos de fazer um
lazy loading:

***primeiro.routes.ts***
```ts
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
```
***app.routes.ts***
```ts
export const routes: Routes = [
  // OUTRAS ROTAS  
  {
    path: 'componentes/primeiro',
    title: 'Primeiro',
    loadChildren: () =>
      import('./components/primeiro/primeiro.routes').then(m => m.PrimeiroRoutes)
  },
  // OUTRAS ROTAS
];
```
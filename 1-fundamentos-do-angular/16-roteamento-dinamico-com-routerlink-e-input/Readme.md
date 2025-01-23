## Roteamento Dinâmico

- Para usar o roteamento dinamico, devemos fazer uma alteração no
  `app.config.ts`, adicionando o `provideHttpClient()`, e também adicionando `withComponentInputBinding()`
  no `providerRouter`:

```ts
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding())
    provideHttpClient()
    ...
  ]
};
```

### Query Params

- Serve para criação de URLs dinâmicas que possuem valores que serão utilizados
  pelo componente da rota atual.
- O ideal é passar valores simples e que façam sentido na construção da rota.
- Pode ser enviado via `Diretiva RouterLink` e `Service Router`
- Pode ser recuperado pelo novo `@Input` e `Service Activated Route`
- 
- Para acessar um valor passado como queryParam, podemos fazer (acessando de forma estática):

***app.routes.ts***
```ts
  export const routes: Routes = [
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'posts/:userId',
      component: PostsComponent
    },
  ];
```
***users.component***
```ts
  import {Component, inject} from '@angular/core';
  import {User, UsersService} from "../../services/users.service";
  import {Observable, of} from "rxjs";
  import {AsyncPipe} from "@angular/common";
  import {RouterLink, RouterOutlet} from "@angular/router";
  
  @Component({
    selector: 'app-users',
    standalone: true,
    imports: [
      AsyncPipe,
      RouterLink,
      RouterOutlet
    ],
    template: `
      @for (user of usersList$ | async; track user){
        <div style="cursor: pointer;" [routerLink]="['/posts', user.id]">
          <div>Id: {{ user.id }}</div>
          <div>Name: {{ user.name }}</div>
        </div>
      }
    `,
    styleUrl: './users.component.scss'
  })
  export class UsersComponent {
    private readonly _userService: UsersService = inject(UsersService);
    usersList$: Observable<User[]> = of([]);
    ngOnInit() {
      this.usersList$ = this._userService.getUsers();
    }
  }
```
***posts.component***
```ts
  import {Component, inject, Input} from '@angular/core';
  import {Post, PostsService} from "../../services/posts.service";
  import {Observable, of} from "rxjs";
  import {AsyncPipe} from "@angular/common";
  
  @Component({
    selector: 'app-posts',
    standalone: true,
    imports: [
      AsyncPipe
    ],
    template: `
      @for (post of postsList$ | async; track post) {
        <div style="padding: 10px;">
          <div>Title: {{ post.title }}</div>
          <div>Content: {{ post.body }}</div>
        </div>
      }
    `,
    styleUrl: './posts.component.scss'
  })
  export class PostsComponent {
    private readonly _postsService: PostsService = inject(PostsService);
    postsList$: Observable<Post[]> = of([]);
    
    // O INPUT SE TIVER O MESMO NOME DO VALOR VARIAVEL DA ROTA,
    // RECEBE O VALOR DO PARAMETRO PASSADO NA ROTA.
    
    @Input() userId: string = '';
    
    ngOnInit() {
      this.postsList$ = this._postsService.getUserPosts(this.userId)
    }
  }
```

- Para acessar um valor passado como queryParam, podemos fazer (acessando de forma dinâmica):

***app.routes.ts***
```ts
  import { Routes } from '@angular/router';
  import { UsersComponent } from "./components/users/users.component";
  import { PostsComponent } from "./components/posts/posts.component";
  
  // PASSANDO COMO CHILDREN, O COMPONENTE PODE SER ACESSADO
  // ATRAVÉS DO ROUTER-OUTLET NO COMPONENTE PAI
  
  export const routes: Routes = [
    {
      path: '',
      redirectTo: '/users',
      pathMatch: 'full',
    },
    {
      path: 'users',
      component: UsersComponent,
      children: [
        {
          path: 'posts/:userId',
          component: PostsComponent
        },
      ]
    },
  ];
```
***user.component***
```ts
  import {Component, inject} from '@angular/core';
  import {User, UsersService} from "../../services/users.service";
  import {Observable, of} from "rxjs";
  import {AsyncPipe} from "@angular/common";
  import {RouterLink, RouterOutlet} from "@angular/router";
  
  @Component({
    selector: 'app-users',
    standalone: true,
    imports: [
      AsyncPipe,
      RouterLink,
      RouterOutlet
    ],
    template: `
      <div style="display:flex;">
        <div style="width: 50%;">
          @for (user of usersList$ | async; track user){
            <div style="cursor: pointer;" [routerLink]="['posts', user.id]">
              <div>Id: {{ user.id }}</div>
              <div>Name: {{ user.name }}</div>
            </div>
          }
        </div>
        <div style="width: 50%;">
          <router-outlet></router-outlet>
        </div>
      </div>
    `,
    styleUrl: './users.component.scss'
  })
  export class UsersComponent {
    private readonly _userService: UsersService = inject(UsersService);
  
    usersList$: Observable<User[]> = of([]);
  
    ngOnInit() {
      this.usersList$ = this._userService.getUsers();
    }
  }
```
***posts.component***
```ts
  import {Component, inject, Input} from '@angular/core';
  import {Post, PostsService} from "../../services/posts.service";
  import {Observable, of} from "rxjs";
  import {AsyncPipe} from "@angular/common";
  
  @Component({
    selector: 'app-posts',
    standalone: true,
    imports: [
      AsyncPipe
    ],
    template: `
      @for (post of postsList$ | async; track post) {
        <div style="padding: 10px;">
          <div>Title: {{ post.title }}</div>
          <div>Content: {{ post.body }}</div>
        </div>
      }
    `,
    styleUrl: './posts.component.scss'
  })
  export class PostsComponent {
    private readonly _postsService: PostsService = inject(PostsService);
    postsList$: Observable<Post[]> = of([]);
    private _userId: string = '';
    @Input()
    set userId(value: string){
      this._userId = value;
      this.postsList$ = this._postsService.getUserPosts(value);
    }
    get userId(): string {
      return this._userId;
    }
  }
```

- Para acessar dados da rota do componente pai atraves do componte filho:

***app.routes.ts***
```ts
import { Routes } from '@angular/router';
import { UsersComponent } from "./components/users/users.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostCommentsComponent } from "./components/posts/components/post-comments/post-comments.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'posts/:userId',
        component: PostsComponent,
        children: [
          {
            path: ':postId',
            component: PostCommentsComponent
          }
        ]
      },
    ]
  },
];
```
***post.component***
```ts
import {Component, inject, Input} from '@angular/core';
import {Post, PostsService} from "../../services/posts.service";
import {Observable, of} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    RouterLink
  ],
  template: `
    <div style="display: flex; flex-direction: column">
      <div style="height: 20%; align-items: start">
        <router-outlet></router-outlet>
      </div>
      <div style="height: 80%;">
        @for (post of postsList$ | async; track post) {
            <div style="padding: 10px; cursor: pointer;" [routerLink]="[post.id]">
              <div>Title: {{ post.title }}</div>
              <div>Content: {{ post.body }}</div>
            </div>
        }
      </div>
    </div>
  `,
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  private readonly _postsService: PostsService = inject(PostsService);
  postsList$: Observable<Post[]> = of([]);
  private _userId: string = '';
  @Input()
  set userId(value: string){
    this._userId = value;
    this.postsList$ = this._postsService.getUserPosts(value);
  }
}
```
***post-comment.component***
```ts
import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-comments',
  standalone: true,
  imports: [],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.scss'
})
export class PostCommentsComponent {

  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  // SE TENTARMOS PEGAR O USERID ATRAVES DO @INPUT() TEREMOS UNDEFINED.
  // DEVEMOS USAR NESTE CASO O SERVICE ACTIVATEDROUTE.
  
  @Input() set postId(value: string) {
    console.log(value);
  }

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe(params => {
      console.log(params)
    })
  }
}
```

### Query Strings

- Passagem de valores complexos pela URL para que sejam acessados pelo componente da rota atual.
- Evitar passar valores sensíveis e que caso alterados comprometam a aplicação.
- Os valores da query string em caso de alteração por um usuário malicioso não
  devem comprometer a integridade dos dados da aplicação.
- Os usuários só podem visualizar informações permitidas a ele.
- Pode ser enviado via `Diretiva RouterLink` e `Service Router`
- Pode ser recuperado pelo novo `@Input` e `Service Activated Route`
- Ex.:

***app.routes.ts***
```ts
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
  ];
```
***comp1.component***
```ts
  import {Component, inject, Input} from '@angular/core';
  import {ActivatedRoute} from "@angular/router";
  import {JsonPipe} from "@angular/common";
  
  @Component({
    selector: 'app-comp1',
    standalone: true,
    imports: [
      JsonPipe
    ],
    template: `
      <div>
        <h1>Static Query Parameters</h1>
        {{staticQueryParams | json}}
      </div>
      <br>
      <div>
        <h1>Query Parameters</h1>
        {{queryParameters | json}}
      </div>
    `,
    styleUrl: './comp1.component.scss'
  })
  export class Comp1Component {
    private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    protected staticQueryParams: any = {};
    private _queryParameters: any = {};
    
    // ATRIBUI AS QUERY COMO INPUT.
    // CASO TENHA UMA QUERY QUE TENHA UM NOME ESPECÍFICO,
    // PODE SER USADO O NOME DA QUERY NO INPUT E O VALOR
    // VIRÁ ATRELADO AO INPUT.
    @Input() set queryParameters(params: any) {
      this._queryParameters = params;
    }
    get queryParameters(): any {
      return this._queryParameters;
    }
  
    ngOnInit() {
        // UM SNAPSHOT É UM METODO ESTÁTICO, QUE PEGA AS INFOS DAS QUERYSTRINGS NO MOMENTO
        // EM QUE SEJA ACIONADO
      this.staticQueryParams = this._activatedRoute.snapshot.queryParams;
        // O SUBSCRIBE ACOMPANHA OS VALORES DAS QUERYSTRINGS,
        // INDEPENDENTE SE ELAS MUDAREM, O SUBSCRIBE IRÁ ACOMPANHAR
      this._activatedRoute.queryParams.subscribe((params) => {
        this.queryParameters = params;
      })
    }
  }
```
***app.component.html***
```angular181html
  <button routerLink="/comp1" [queryParams]="{nome: 'Lucas', idade: 27}">
    Redirecionar Lucas
  </button>
<!--    
    Query Parameters
    { "nome": "Lucas", "idade": "27" }
-->
  <button routerLink="/comp1" [queryParams]="{nome: 'Teste', idade: 99}">
    Redirecionar Teste
  </button>
<!--
    Query Parameters
    { "nome": "Teste", "idade": "99" }
-->
  <button routerLink="/comp1">
    Redirecionar Sem Preservar Query Params
  </button>
<!--
    Query Parameters
    {}
-->
  <button routerLink="/comp1-2" queryParamsHandling="preserve">
    Redirecionar Preservando Query Params
  </button>
<!--
            CASO VENHA DE LUCAS
    Query Parameters
    { "nome": "Lucas", "idade": "27" }
            CASO VENHA DE TESTE
    Query Parameters
    { "nome": "Teste", "idade": "99" }
-->
  <button routerLink="/comp1-3" [queryParams]="{status: 'ativo'}" queryParamsHandling="merge">
    Redirecionar Fazendo Merge de Query Params
  </button>
<!--
            CASO VENHA DE LUCAS
    Query Parameters
    { "nome": "Lucas", "idade": "27", "status": "ativo" }
            CASO VENHA DE TESTE
    Query Parameters
    { "nome": "Teste", "idade": "99", "status": "ativo" }
-->
  <router-outlet></router-outlet>
```

### Property Data

- Passagem de valores estáticos para que sejam acessados peloi componente da rota
  atual.
- Geralmente valores que não devem ficar acessíveis para o usuário da aplicação e que mudam
  o comportamento do componente.
- Pode ser enviado pela configuração do objeto na rota;
- Pode ser recuperado pelo `Service Activated Route`
- Ex.:

***app.routes.ts***
```ts
  import { Routes } from '@angular/router';
  import {Comp1Component} from "./components/comp1/comp1.component";
  import {GenericComponent} from "./components/generic/generic.component";
  
  export const routes: Routes = [
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
```
***generic.component***
```ts
  import {Component, inject, Input} from '@angular/core';
  import {ActivatedRoute} from "@angular/router";
  import {JsonPipe} from "@angular/common";
  
  @Component({
    selector: 'app-generic',
    standalone: true,
    imports: [
      JsonPipe
    ],
    template: `
      <div>
        <h1>Data</h1>
        {{data | json}}
      </div>
    `,
    styleUrl: './generic.component.scss'
  })
  export class GenericComponent {
    private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    protected data: any = {};
    ngOnInit(): void {
      this._activatedRoute.data.subscribe(
        data => this.data = data
      )
    }
  }
```
***app.component.html***
```angular181html
  <button routerLink="/generic-user">Generic User</button>
<!--
    Data
    { "role": "user" }
-->
  <button routerLink="/generic-admin">Generic Admin</button>
<!--
    Data
    { "role": "admin" }
-->
  <router-outlet></router-outlet>
```
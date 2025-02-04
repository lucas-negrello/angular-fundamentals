## Observables

### Porque?

- Posso me inscrever em um observable e sempre que um valor for emitido ou recebido por ele,
  eu recebo o valor de forma assíncrona.
- Posso ter um observable que faz o emmit de vários valores, em momentos diferentes.

### Tipos:

- ***Observable:*** instanciado com `new Observable<T>()`, emite valores de do tipo `T` forma assincrona
  para quem está inscrito nele (`.subscribe()`); Sempre que chamado, é criado uma nova instância de Observable.

- ***BehaviorSubject:*** instanciado com `new BehaviorSubject<T>('emit-inicial')`, dispara eventos
  do tipo `T` de acordo com um controle externo. Quando é realizado um `subscribe()` nele,
  ele já emite de cara o último valor emitido. Ao criar um BehaviorSubject é necessário estipular
  o primeiro valor que ele irá emitir. O evento que emite um valor externo é o `.next('novo-valor')`.
  Se 3 componentes estiverem inscritos neste mesmo Subject, todos os 3 iriam receber os mesmos valores
  simultaneamente.

- ***Subject:*** instanciado com `new Subject<T>()`, dispara eventos do tipo `T` de acordo com 
  um controle externo. Quando é realizado um `subscribe()` nele, ele não emite o último valor
  já emitido. Começa a receber valores a parir do momento que foi subscrito. O evento que emite um valor 
  externo é o `.next('novo-valor')`. Se 3 componentes estiverem inscritos neste mesmo Subject, 
  todos os 3 iriam receber os mesmos valores simultaneamente.

### Como criar e executar um observable:

- Um observable deve ser instanciado com `new Observable()`.
- Dentro dos seus parametros, recebe uma função de callback, que vai conter um `observer` do tipo `Subscriber<T>`,
  onde `T` é o tipo do subscriber retornado.
- Dentro do seu retorno, o observer implementa o método `.next()`, que irá transmitir algum valor do tipo `T` definido
  no Subscriber.
- Podem existir quantos `.next()` forem necessários dentro de um Observable.
- Caso um Observable não tenha sua inscrição encerrada, ele fica rodando em background, consumindo memória e processamento.
- Para encerrar um Observable, devemos retornar uma função de callback dentro dele, que irá acionar o método `complete()`
  do `observer`.
- Caso possua algum `Interval` dentro do Observable, o `clearInterval` pode ser chamado também dentro da função de retorno.
- Para se inscrever em um Observable, devemos usar o método `.subscribe()`, que irá receber uma função de callback, retornando
  uma inscrição no Observable e mantendo a leitura do mesmo. Sempre que um valor for alterado, o mesmo irá notificar por meio
  do seu `subscribe()`.
- Para se desinscrever de um Observable, basta utilizar o metodo `.unsubscribe()`, o que irá encerrar o ciclo de conexão e vida
  do Observable.

```ts
  import {Component, Injectable} from "@angular/core";
  
  @Injectable()
  class ObservableService {
    obsInterval(): Observable<any> {
      return new Observable((observer: Subscriber<any>) => {
  
        const interval = setInterval(() => {
          console.log('Enviando dados a cada 2s - Dentro do Observable');
          observer.next('Enviando dados a cada 2s - Dentro do .next');
        }, 2000);
  
        return () => {
          // Essa função é acionada quando o unsubscribe for chamado.
          console.log('Completa a subscription');
          // Apenas completar o observer não para o setInterval
          observer.complete();
          // Essa função para um interval
          clearInterval(interval);
        }
      })
    }
  }
  
  @Component({
    selector: 'app-observable',
    standalone: true,
    imports: [ObservableService],
    template: `
      @for(interval of (interval$ | async); track interval;){
          {{ interval | json }}
      }
    `,
    styleUrl: './observable.component.scss'
  })
  class observableComponent {
    private readonly _observableService: ObservableService
    protected interval$!: Subscription;
  
    constructor() {
        // Isso instancia um observable em uma variável, podendo chamar
        // o metodo .subscribe a partir dela, ou pegar valores a partir
        // do pipe async no template
      this.interval$ = this._observableService.obsInterval();
    }
  }
```

### Métodos dos Observables (.pipe()):

- O `.pipe()` é um método que permite adicionar operadores a um Observable, como:

- ***Operador `map`:***
  - Serve para modelar a resposta antes de retornar um valor.

```ts
  import {Injectable} from "@angular/core";
  
  @Injectable()
  class MapObservableService {
    getTodoInfos(id: number) {
      return this._httpClient.get(`https://jsonplaceholder.typicode.com/todos/${id}`).pipe(
          // Os metodos são resolvidos na ordem em que são declarados
              map((todoResponse: any) => {
                return {
                  id: todoResponse.id,
                  title: todoResponse.title
                };
              })
          // Poderia existir um outro metodo map após este, que iria modelar a resposta
          // a partir da resposta do map anterior.
      );
    }
  }
```

- ***Operadores `switchMap` e `take`:***
  - `SwitchMap` Encadeia chamadas de Observables dentro de um pipe, tornando as chamadas sequenciais.
  - `Take` Encerra a subscription de dentro do pipe. Recebe por parametro quantos valores podem ser recebidos
    até o encecrramento da subscription. Deve ser sempre criado ao fim do pipe.

```ts
  import {Component, Injectable} from "@angular/core";
  
  @Injectable()
  class SwitchMapObservableService {
    obs1() {
      return new Observable((observer: Subscriber<any>) => {
        observer.next('value 1');
  
        return () => {
          console.log('limpeza 1');
        }
      })
    }
  
    obs2() {
      return new Observable((observer: Subscriber<any>) => {
        observer.next('value 2');
  
        return () => {
          console.log('limpeza 2');
        }
      })
    }
  }
  
  @Component({
    selector: 'app-observable',
    standalone: true,
    imports: [ObservableService],
    template: `
        @for(interval of (interval$ | async); track interval;){
            {{ interval | json }}
        }
      `,
    styleUrl: './observable.component.scss'
  })
  class observableComponent {
      private readonly _switchMapObservableService: SwitchMapObservableService
      protected subs!: Subscription;
  
      constructor() {
        this.subs = this._switchMapObservableService.obs1().pipe(
          // Estariamos resolvendo o obs1 e nos inscrevendo no obs2.
          // Caso seja feita uma subscription após o pipe, o valor da
          // subscription será do obs2
          switchMap((valueObs1) => {
            // ... alguma lógica
            console.log(valueObs1);
            return this._observableService.obs2();
          }),
          // ... outros operadores
          // Recebe de parametros quantos emits serão enviados
          // até se desinscrever (após um emit ele se desinscreve)
          // Caso sejam mandados menos valores que o take, ele não vai
          // se desinscrever.  
          take(1)
        ).subscribe((value) => {
          console.log(value); // A subscription retorna o valor da última inscrição.
        });
        // O switchMap não faz o complete automaticamente, portanto, precisamos
        // nos desinscrever do observer com o take()
      }
  }
```

### Utilizando `Subject` e `BehaviorSubject`:

- Ambos são instanciado apenas uma vez, e cada vez que são chamados, são chamados a partir de sua instância inicial.

- ***Subject:***
  - Inicia um Subject que terá funções para controlá-lo

```ts
// ESTE É O SERVIÇO QUE CONTÉM OS MÉTODOS DO SUBJECT

  import {Injectable} from '@angular/core';
  import {Observable, Subject} from "rxjs";
  @Injectable({
    providedIn: 'root'
  })
  export class SubjectService {
    private readonly valueChanged$: Subject<number> = new Subject<number>();
    valueChanged(): Observable<number> {
      return this.valueChanged$.asObservable();
    }
    emitValue(number: number) {
      this.valueChanged$.next(number);
    }
  }
  
// NESTE COMPONENTE SERÃO EMITIDOS OS DADOS DO SUBJECT
  
  import {Component} from '@angular/core';
  import {SubjectService} from "./subject.service";
  
  @Component({
    selector: 'app-subject',
    standalone: true,
    imports: [
      
    ],
    template: `
      <button (click)="dispararObs(1)">Enviar 1</button>
      <button (click)="dispararObs(2)">Enviar 2</button>
      <button (click)="dispararObs(3)">Enviar 3</button>
      
      <app-consumidor></app-consumidor>
    `,
    styleUrl: './subject.component.scss'
  })
  export class SubjectComponent {
  
    constructor(
        private readonly _subjectService: SubjectService
    ) {}
  
    // cada vez que o metodo for acionado, será emitido um novo
    // valor no Subject. Caso nenhum valor tenha sido disparado,
    // O valor do subject é null ou undefined.
    dispararObs(number: number) {
      this._subjectService.emitValue(number);
    }
  }

// NESTE COMPONENTE, SERÁ CONSUMIDO OS DADOS EMITIDOS DO SUBJECT

  import {Component} from '@angular/core';
  import {SubjectService} from "../../subject.service";
  import {Observable} from 'rxjs';
  import {AsyncPipe} from "@angular/common";
  
  @Component({
    selector: 'app-consumidor',
    standalone: true,
    imports: [
      AsyncPipe
    ],
    template: `
      @if (valueChanged$ | async; as value){
        <p>Valor Atual: {{value}}</p>
      }
    `,
    styleUrl: './consumidor.component.scss'
  })
  export class ConsumidorComponent {
  
    valueChanged$!: Observable<number>;
    constructor(private readonly _subjectService: SubjectService) {}
  
    ngOnInit() {
      this.valueChanged$ = this._subjectService.valueChanged();
    }
  }
```

- ***BehaviorSubject:***
  - Inicia um BehaviorSubject que terá funções para controlá-lo

```ts
// ESTE É O SERVIÇO QUE CONTÉM OS MÉTODOS DO SUBJECT

  import {Injectable} from '@angular/core';
  import {BehaviorSubject, Observable} from "rxjs";
  
  @Injectable({
    providedIn: 'root'
  })
  export class SubjectService {
    private readonly valueChanged$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
    valueChanged(): Observable<number> {
      return this.valueChanged$.asObservable();
    }
  
    emitValue(number: number) {
      this.valueChanged$.next(number);
    }
  }

// NESTE COMPONENTE SERÃO EMITIDOS OS DADOS DO SUBJECT

  import {Component} from '@angular/core';
  import {SubjectService} from "./subject.service";
  
  @Component({
    selector: 'app-subject',
    standalone: true,
    imports: [],
    template: `
        <button (click)="dispararObs(1)">Enviar 1</button>
        <button (click)="dispararObs(2)">Enviar 2</button>
        <button (click)="dispararObs(3)">Enviar 3</button>
        
        <app-consumidor></app-consumidor>
      `,
    styleUrl: './subject.component.scss'
  })
  export class SubjectComponent {
  
    constructor(
            private readonly _subjectService: SubjectService
    ) {
    }
  
    // cada vez que o metodo for acionado, será emitido um novo
    // valor no Subject. Caso nenhum valor tenha sido disparado,
    // O valor do subject é null ou undefined.
    dispararObs(number: number) {
      this._subjectService.emitValue(number);
    }
  }

// NESTE COMPONENTE, SERÁ CONSUMIDO OS DADOS EMITIDOS DO SUBJECT

  import {Component} from '@angular/core';
  import {SubjectService} from "../../subject.service";
  import {Observable, of} from 'rxjs';
  import {AsyncPipe} from "@angular/common";
  
  @Component({
    selector: 'app-consumidor',
    standalone: true,
    imports: [
      AsyncPipe
    ],
    template: `
        @if (valueChanged$ | async; as value){
          <p>Valor Atual: {{value}}</p>
        }
      `,
    styleUrl: './consumidor.component.scss'
  })
  export class ConsumidorComponent {
  
    valueChanged$: Observable<number> = of(0);
  
    constructor(private readonly _subjectService: SubjectService) {
    }
  
    ngOnInit() {
      this.valueChanged$ = this._subjectService.valueChanged();
    }
  }
```

### Observações sobre os Observables:

- Os Observables podem ser síncronos ou assíncronos.
- Os Observables podem ser usados para transmitir dados no lugar do @Input(). Isto pode ser uma boa
  abordagem caso vários componentes precisem ouvir os mesmos valores.

## Promises

### Como criar e executar uma promise:

- Uma promise tem 3 estados:
  - Pending: Quando está sendo processada. Pode se mover para outros 2 estados, dependendo do seu fluxo e resposta:
    - Fulfilled: Quando foi completa com sucesso, retornando os valores esperados;
    - Rejected: Quando foi rejeitada devido algum erro em seu processamento.
- Uma promise pode ser criada a partir de `new Promise()`, que terá como parametro uma função de callback.
- A função de callback da promise contém 2 parametros: `resolve` e `reject`. Em caso de sucesso, devemos acionar o método `resolve`
  e em caso de erro, devemos acionar o método `reject`.
- O método `resolve`, mesmo se for chamado no meio da funçao, só irá ser executado após toda função de callback ser executada.
- O método `reject` pode retornar um erro através de `new Error(...)` ou retornar algum valor, conforme a necessidade.
- Para capturarmos o valor enviado em `resolve`, devemos utilizar o `.then()`, que irá retornar uma função de callback.
  Nesta função de callback, podemos acessar o valor da resposta emitida por `resolve`.
- Para capturarmos o valor enviado em `reject`, devemos utilizar o `.catch()`, que irá retornar uma função de callback.
  Nesta função de callback, podemos acessar o valor da resposta emitida por `reject`.
- Temos também uma função `finally()`, que é sempre executada, independentemente se a promise foi rejeitada ou resolvida.

```ts
  import {Injectable} from '@angular/core';
  @Injectable({
    providedIn: 'root'
  })
  export class PromisesService {
  
      promiseSimples() {
          return new Promise((resolve, reject) => {
              console.log('promiseSimples'); // Primeiro retorno
              resolve('promiseResolved'); // Terceiro retorno
              console.log('finalPromise'); // Segundo retorno
              // reject(new Error('promiseRejected')); // Caso quisessemos rejeitar a promise por algum motivo
          })
      }
  }

  import {Component} from '@angular/core';
  import {PromisesService} from "./promises.service";
  
  @Component({
    selector: 'app-promises',
    standalone: true,
    imports: [],
    templateUrl: './promises.component.html',
    styleUrl: './promises.component.scss'
  })
  export class PromisesComponent {
      constructor(private readonly _promisesService: PromisesService) {}
      ngOnInit() {
          this._promisesService.promiseSimples()
              .then((value) => console.log('then: ', value)) // .then recebe a resposta do resolve
              .catch((error) => console.log('catch:', error)) // .catch recebe a resposta do reject
              .finally(() => console.log('finally')); // .finally é sempre acionado
      }
  }
```

### Fluxo Assíncrono da Promise:

- Uma promise é sempre assíncrona, o que resulta que, caso tenham funcoes síncronas para serem executadas, mesmo
  se instanciadas após a promise, elas serão executadas antes, pois o Javascript executa sempre antes o código
  síncrono e depois o código assíncrono.

### Funções de Promise:

- ***Promise.all()***
  - Resolve um array de promises.
  - Caso alguma promise retorne `rejected`, o retorno falha.
  - O retorno é um array e em cada indice do array possui a resolução da promise.
- ***Promise.race()***
  - Resolve um array de promises.
  - Retorna apenas a promise que foi resolvida por primeiro (mais rápida).
  - Caso alguma promise do array retorne `rejected`, o retorno será um erro.
- ***Promise.any()***
  - Resolve um array de promises.
  - Retorna apenas a promise sem erros que foi resolvida mais rapida.
  - Caso alguma promise do array retorne `rejected`, o erro será ignorado.
  - Caso todas promises do array retornem `rejected`, o retorno será um erro.
- ***Promise.allSettled()***
  - Resolve um array de promises, sempre retornando através do `.then()`.
  - Seu retorno é sempre um array de objetos, com um objeto para cada promise do array de promises.
  - Caso a promise seja resolvida com sucesso, retorna um `status: 'fulfilled'` e um `value` com o resultado.
  - Caso a promise seja rejeitada, retorna um `status: rejected` e um `reason` com o erro ocorrido.

### Utilizando Async - Await

- O Async Await resolve as promises (assíncronas sempre) de forma 'síncrona'.
- Este método força que seja esperado um resultado antes de prosseguir.
- Por necessitar de uma espera, para promises que podem retornar erros, deve-se usar o bloco Try Catch.

```ts
class AsyncComponent {
  async userTodos()
  {
    // especifica que deve ocorrer uma espera antes de continuar a execução
    // deve estar dentro de um tryCatch para pegar os erros da requisição
    // os codigos async sao executados de forma sincrona com o await
    try {
      console.log('user todos'); // primeiro
      const usersList: any[] = await this._promisesService.getUsers() as any[]; // segundo
      const userTodos: any[] = await this._promisesService.getUserTodos(usersList[0].id) as any[]; // terceiro
      console.log('response user todos', userTodos) // quarto
    } catch (e) {
      console.log(e) // em caso de erro
    }
  }
}
```

### Transformando Observables em Promises:

- Para transformar Observables em Promises podemos usar o método `firstValueFrom()`, que recebe um Observable e retorna uma Promise.
- Este método captura o primeiro valor emitido pelo Observable, realizando o `unsubscribe` após receber o mesmo.

```ts
class PromisesService {
    
    // POR PADRAO UMA RESPONSE DE HTTPCLIENT É UM OBSERVABLE. PARA RETORNAR UMA PROMISE,
    // BASTA UTILIZAR O FIRSTVALUEFROM.
    // VALE LEMBRAR QUE UMA PROMISE NÃO FICA ESCUTANDO AS MUDANÇAS, CASO SEJA NECESSÁRIO, UTILIZE UM OBSERVABLE.
    // É POSSIVEL TAMBEM, ANTES DE RETORNAR A PROMISE, UTILIZAR O .PIPE() NO OBSERVABLE PARA MODELAR A RESPOSTA.
  getUserTodos(userId: string) {
    return firstValueFrom(this._httpClient.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`));
  }
}
```

## Pipes

### Como funcionam:

- Os pipes transformam um texto ou um conteudo
  sem alterar a instancia original do elemento

```
component.ts

    pessoa = {
        nome: 'Nome',
        idade: 20,
    }

component.html

    <div>{{ pessoa.nome | uppercase }}</div>
    
    // NESTE CASO O RESULTADO SERA 'NOME'
    // POREM, pessoa.nome IRA CONTINUAR A
    // MANTER O SEU VALOR COMO 'Nome'

```

- Podemos, tambem, encadear pipes, adicionando, por exemplo,
  um pipe `json` e um pipe `uppercase` apos para transformar
  todas palavras do json transformado em uppercase

```html
    <div>{{ pessoa | json | uppercase }}</div>
```

- Os pipes so ficam disponiveis devido ao `CommonModule` do angular,
  que traz funcoes como ngFor, ngIf, etc. 

### Pipes comuns do angular:

- uppercase: transforma para uppercase algum texto
- lowercase: transforma para lowercase algum texto
- titlecase: faz um Captalize do texto
- json: mostra os dados como um json (para debugar, por exemplo)
- slice: tem a mesma funcionalidade da funçao slice do javascript
  - pode ser usado com strings, arrays e diretivas
- date: transforma as datas para um formato desejado (passado por parametro)

### Criando Pipes

- Para criar um pipe, devemos passar como parametro o valor que ele irá
  receber para transformar, e, se necessário, parâmetros adicionais
- A nomenclatura de um arquivo de pipe será sempre NOME.pipe.ts
- Ele é uma classe que irá implementar `PipeTransform`, que contém
  a função de transform
- Além disso, devemos usar o decorator `@Pipe` para defini-lo como um pipe.
- Ex.:

```ts
//example.pipe.ts

  import {Pipe, PipeTransform} from "@angular/core";
  
  @Pipe({
    name: 'example',
  })
  export class ExamplePipe implements PipeTransform {
      transform(value: string, parameter: number): string {
        if (!value) {
          return '';
        }
        if (value.length <= parameter) {
          return value;
        }
        return `${value.slice(0, parameter)}...`;
      }
  }
```

### Utilizando o date Pipe

- O pipe `date` possui algumas configurações:
  - `value`: a data nos formatos:
    - ISO8601 (string): `2024-10-21T21:00:00.000Z`
    - ISO8601 (string): `2024-10-21T21:00:00.000`
      - OBS.: o `z` no final da string indica qual fuso horário está sendo usado
    - Objeto (Date): `Mon Oct 21 2024 18:00:00 GMT-0300 (Brasilia Standard Time)`
      - OBS.: formado pela instancia de `new Date`
    - Timestamp (number): `1729544400000`
      - OBS.: é a quantidade de milisegundos desde uma data fixada
  - `format`: formata o value conforme o que é recebido:
    - Formatações Padrões:
      - `short`: 21/10/2024 21:00
      - `medium`: 21 de out. de 2024 21:00:00
      - `long`: 21 de outubro de 2024 21:00:00 GMT+0
      - `full`: segunda-feira, 21 de outubro de 2024 21:00:00 GMT+00:00
    - Formatações Customizadas:
      - Podem ser formadas frases, colocando os textos normais dentro de
        aspas simples e os valores conforme a documentação.
      - `dd`: dia do mes (0 a 31)
      - `MM`: mes do ano (0 a 12)
      - `YYYY`: ano
      - `hh`: hora 
      - `mm`: minuto
      - `ss`: segundo
      - `YY`: ano simplificado
      - `EEEE`: dia da semana
      - `MMMM`: mes literal
      - `ZZZZ`: Fuso Horario
  - `timezone`: define o fuso horário da data:
    - `"+0000"`: GMT+00:00
    - `"-0300"`: GMT-03:00
  - `locale`: define o formato do local da data:
    - `"pt-BR"`: portugues do Brasil
    - `"en-US"`: ingles do EUA

- Alem das configurações de pipe, o mesmo possui um provider
  para configurações globais:
  
```ts
import {DATE_PIPE_DEFAULT_OPTIONS} from "@angular/common";
import {LOCALE_ID} from "@angular/core";
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from "@angular/common";

registerLocaleData(localePt, 'pt-BR');

@ngModule({
    //...
    providers: [
      {
        provide: DATE_PIPE_DEFAULT_OPTIONS,
        useValue: {
          dateFormat: "dd/MM/YYYY",
          timezone: "+0000",
        }
      },
      {
        provide: LOCALE_ID,
        useValue: 'pt-BR',
      }
    ]
})

```

### Utilizando o decimal Pipe (number)

- Leve em conta que os padões de regiões são diferentes e modificam o resultado
  do pipe:
  - Padrão JS: `1200300.123`
  - Padrão BR: `1.200.300,123`
  - Padrão US: `1,200,300.123`
- O pipe number possui algumas configurações:
  - `digits-info` recebe 3 valores no seguinte formato: `x.y-z`
    - O primeiro parametro define o mínimo de inteiros do número
    - O segundo parametro, define o mínimo de decimais do número
    - O terceiro parametro define o máximo de decimais do número
      - Quando um número ultrapassa o máximo de decimais, ele é arredondado,
        caso o número após o último visível seja >= 5, ele será arredondado para cima,
        caso seja < 5, será arredondado para baixo.
  - `locale` funciona exatamente igual ao date pipe para definir
    um local padrão (Definir a variável `LOCALE_ID` globalmente utilizar a função
    `registerLocaleData(localePt, 'pt-BR');` para importar o locale)

```angular181html
  <h1>DECIMAL PIPE</h1>
  
  <h3>NUMERO | number : '<b>mínimo de inteiros</b> . <b>mínimo de decimais</b> - <b>máximo de decimais</b>' : 'local'</h3>
  
  <b>Digits info: 3.0-2 // Number: 12.3 // Result: 012.3</b>
  <p>{{12.3 | number: '3.0-2' : 'en-US'}}</p>
  
  <b>Digits info: 3.0-2 // Locale: en-US // Number: 1212.3 // Result: 1,212.3</b>
  <p>{{1212.3 | number: '3.0-2' : 'en-US'}}</p>
  
  <b>Digits info: 3.0-2 // Locale: pt-BR // Number: 1212.3 // Result: 1.212,3</b>
  <p>{{1212.3 | number: '3.0-2' : 'pt-BR'}}</p>
  
  <b>Digits info: undefined // Locale: undefined // Number: 1212.3 // Result: 1.212,3 <br>
  Irá pegar a linguagem default do pipe, definida no inicio do projeto (neste caso pt-BR) <br>
  Caso nao seja definida linguagem, a default é en-US</b>
  <p>{{1212.3 | number}}</p>
  
  <b>Digits info: undefined // Locale: pt-BR // Number: 1212.3 // Result: 1.212,3</b>
  <p>{{1212.3 | number: undefined : 'pt-BR'}}</p>
  
  <b>Digits info: 0.3-4 // Locale: pt-BR // Number: 12.3 // Result: 12,300</b>
  <p>{{12.3 | number: '0.3-4' : 'pt-BR'}}</p>
  
  <b>Digits info: 0.3-4 // Locale: pt-BR // Number: 12.34567 // Result: 12,3457</b>
  <p>{{12.34567 | number: '0.3-4' : 'pt-BR'}}</p>
  
  <b>Digits info: 0.3-4 // Locale: pt-BR // Number: 12.34224 // Result: 12,3422</b>
  <p>{{12.34224 | number: '0.3-4' : 'pt-BR'}}</p>
  
  <b> <sub> Se o valor que passa do máximo for maior ou igual que 5, o valor do último decimal será adicionado em um</sub> </b>
  <br>
  <b> <sub> Se o valor que passa do máximo for menor que 5, o valor do último decimal será mantido</sub> </b>
  <br>
```

### Utilizando o currency pipe

- Serve para transformar valores em valores monetários
- Possui alguns parâmetros, como:
  - `currency-code` definido pelo código `ISO 4217`, define qual
    o formato da moeda.
  - `display` define como será mostrado o código selecionado
    - `symbol`: DEFAULT - Mostra o símbolo da moeda completo (US$)
    - `symbol-narrow`: Mostra o símbolo da moeda simplificado ($)
    - `code`: Mostra o código da moeda (USD)
  - `digits-info` funciona exatamente igual ao digits-info do pipe number
    - o DEFAULT é 1.2-2
  - `locale` funciona exatamente igual ao locale de todos outros pipes
- Para definir uma moeda padrão, definimos o `DEFAULT_CURRENCY_CODE`

```ts
  providers = [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ]
```

```angular181html
  <h1>CURRENCY PIPE</h1>
  
  <h3>NUMERO | currency : '<b>código ISO 4217</b> : <b>modo de display (string)</b> : <b>'digits info'</b> : 'local'</h3>
  
  <b>Currency code: undefined // Number: 1200.99 // Result: US$ 1.200,99</b>
  <p>{{1200.99 | currency}}</p>
  
  <b>Currency code: 'BRL' // Number: 1200.99 // Result: R$ 1.200,99</b>
  <p>{{1200.99 | currency : 'BRL'}}</p>
  
  <b>Currency code: 'BRL' // Display: 'code' // Number: 1200.99 // Result: BRL 1.200,99</b>
  <p>{{1200.99 | currency : 'BRL' : 'code'}}</p>
  
  <b>DEFAULT</b>
  <b>Currency code: 'USD' // Display: 'symbol' // Number: 1200.99 // Result: US$ 1.200,99</b>
  <p>{{1200.99 | currency : 'USD' : 'symbol'}}</p>
  
  <b>Currency code: 'USD' // Display: 'symbol-narrow' // Number: 1200.99 // Result: $ 1.200,99</b>
  <p>{{1200.99 | currency : 'USD' : 'symbol-narrow'}}</p>
  
  <b>Currency code: 'BRL' // Display: 'custom $' // Number: 1200.99 // Result: custom $ 1.200,99</b>
  <p>{{1200.99 | currency : 'BRL' : 'custom $'}}</p>
  
  <b>Currency code: 'BRL' // Display: undefined // Digits Info: undefined // Number: 1200.99 // Result: custom R$ 1.200,99</b>
  <p>{{1200.99 | currency : 'BRL' : undefined : undefined}}</p>
  
  <b>Currency code: 'BRL' // Display: undefined // Digits Info: '7.4-4' // Number: 1200.99 // Result: custom R$ 0.001.200,9900</b>
  <p>{{1200.99 | currency : 'BRL' : undefined : '7.4-4'}}</p>
  
  <b>Currency code: 'BRL' // Display: undefined // Digits Info: '1.0-0' // Number: 1200.99 // Result: custom R$ 1.201</b>
  <p>{{1200.99 | currency : 'BRL' : undefined : '1.0-0'}}</p>
  
  <b>Currency code: 'BRL' // Display: undefined // Digits Info: undefined // Locale: 'en-US' // Number: 1200.99 // Result: custom R$ 1,200.99</b>
  <p>{{1200.99 | currency : 'BRL' : undefined : undefined : 'en-US'}}</p>
```

### Utilizando o Async Pipe

- O pipe async pode resolver observables ou promises, se desinscrevendo
  automaticamente das subscriptions dos observables.
- Para resolver uma subscription com o pipe, basta adicionar ele
  ao lado do observable.
- Ex.:

```
(component.ts)

  protected user: User = {} as User;
  protected user$!: Observable<User>;
  protected userCollection = [] as User[];
  protected userCollection$!: Observable<User[]>;
  protected userPromise: {id: number, name: string, username: string, email: string} = {} as {id: number, name: string, username: string, email: string};
  protected userPromise$!: Promise<{id: number, name: string, username: string, email: string}>;
  protected userObservablePromise: Promise<User> = {} as Promise<User>;
  
  constructor(private readonly usersService: UsersService) {
  }
  
  ngOnInit(){
    this.user$ = this.usersService.getUserById(1);
    this.userCollection$ = this.usersService.getUsers();
    this.userPromise$ = this.usersService.getUserPromise();
  
    this.usersService.getUserById(1).subscribe(
            user => {
              this.user = user;
            }
    )
    this.usersService.getUsers().subscribe(
            users => {
              this.userCollection = users;
            }
    )
    this.usersService.getUserPromise().then(
            promise => this.userPromise = promise
    );
    this.userObservablePromise = lastValueFrom(this.usersService.getUserById(1))
  }

(component.html)

  <h1>ASYNC PIPE</h1>
  
  <h2>Renderizando um objeto</h2>
  
  <h3>OBSERVABLE | async</h3>
  
  <b>user.name response manualmente</b>
  <p>{{user.name}}</p>
  
  <b>user$.name subscription response pelo async pipe</b>
  <p *ngIf="(user$ | async) as asyncUser">
          {{ asyncUser.name }}
  </p>
  
  <h2>Renderizando uma colection</h2>
  
  <h3>OBSERVABLE | async</h3>
  
  <b>response manual</b> <br><br>
  <div *ngFor="let user of userCollection | slice:0:5; let i = index">
          <b>{{i+1}} user.name</b>
  <p>{{user.name}}</p>
  </div>
  
  
  <b>response pelo async pipe</b> <br><br>
  <div *ngFor="let user$ of userCollection$ | async | slice:0:5; let i = index">
          <b>{{i+1}} user$.name</b>
  <p>
  {{ user$.name }}
  </p>
  </div>
  
  <h2>Renderizando uma promise</h2>
  
  <b>user.name response manualmente</b>
  <p *ngIf="userPromise.name; else loading">{{userPromise.name}}</p>
  
  <b>user$.name subscription response pelo async pipe</b>
  <p *ngIf="(userPromise$ | async) as asyncUser; else loading">
          {{ asyncUser.name }}
  </p>
  
  <b>user.name response usando observable como promise (lastValueFrom)</b>
  <p *ngIf="(userObservablePromise | async) as asyncUser; else loading">
          {{ asyncUser.name }}
  </p>
  
  <ng-template #loading>
  <p>carregando...</p>
  </ng-template>
```

### Pipes puros e impuros

- Um pipe puro só executa seu transform caso o seu valor mude ou quando é referenciado
- Um pipe impuro sempre é executado caso ocorra uma mudança no componente,
  independente se a mudança for onde o pipe existe ou não.
- Referencia-se um pipe como puro ou não nas propriedades do
  decorator do pipe.
- Ex.:

```ts
@Pipe({
  name: "userStatus",
  pure: true // OU false CASO SEJA IMPURO
})
```

### Pipes ou Funções do Componente

- Quando usamos um pipe (puro), ele é chamado somente quando
  o valor que está usando o pipe muda.
- Quando usamos uma função do componente, ela vai funcionar como
  um pipe impuro, renderizando a função a cada vez que um elemento
  na tela muda.

### Tratamento de erros nos pipes

- Quando ocorre um erro dentro de um pipe, ele ocorre apenas dentro
  de onde está o erro, não influenciando outros pipes, inclusive,
  não influenciando outros pipes do mesmo tipo
- Para tratar erros dentro de um pipe podemos usar um try-catch,
  fazendo um `throw new Error('Mensagem do Erro')` quando a excessão ocorrer
  e definindo uma resposta para o erro no catch, podendo incluir o erro
  lançado ou apenas uma mensagem padrão.


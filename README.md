<h1>ANGULAR</h1>

<p>Neste documento, é apresentada uma breve documentação sobre como utilizar o framework Angular corretamente.</p>
<p>Este documento foi construido baseado nas versões 17 e 18 do Angular. </p>

<hr/>

<h2>SUMÁRIO</h2>


1. [COMPONENTES E ESTILIZAÇÕES](#1-componentes-e-estilizações)
    1. [Componente](#componente)
    2. [Módulos](#módulos)
2. [BINDING, DIRETIVAS, TEMPLATES E DECORATORS](#2-binding-diretivas-templates-e-decorators)
    1. [Elementos HTML](#elementos-html)
    2. [Property Binding](#property-binding)
    3. [Event Binding](#event-binding)
    4. [Attribute Binding](#attribute-binding)
    5. [Style Binding](#style-binding)
    6. [Class Binding](#class-binding)
    7. [Decorator @Input](#decorator-input)
    8. [Decorator @Output](#decorator-output) 
    9. [Two-way Data Binding](#two-way-data-binding)
   10. [Diretiva NgIf](#diretiva-ngifboolean)
   11. [Diretiva NgFor](#diretiva-ngforlet-item-of-items)
   12. [Diretiva de Atributo NgStyle](#diretiva-de-atributo-ngstyle)
   13. [Diretiva de Atributo NgClass](#diretiva-de-atributo-ngclass)
   14. [Introdução aos Pipes](#introdução-aos-pipes)
   15. [Escopos e Parâmetros](#escopos-e-parâmetros)
   16. [Template Variables](#template-variables)
   17. [Criando Diretivas](#criando-diretivas)
   18. [ElementRef](#elementref)
3. [PROJEÇÃO DE CONTEÚDO E ESTILIZAÇÃO COM DIRETIVAS](#3-projeção-de-conteúdo-e-estilização-com-diretivas)
    1. [Projeção Básica de Conteúdo](#projeção-básica-de-conteúdo)
    2. [Especificando qual conteúdo será mostrado](#especificando-qual-conteúdo-será-mostrado-select)
    3. [Diretiva com seletor de elementos](#diretiva-com-seletor-de-elementos)
    4. [Multiplos seletores de diretiva](#multiplos-seletores-de-diretiva)
4. [TÓPICOS AVANÇADOS DE PROJEÇÃO DE CONTEÚDO](#4-tópicos-avançados-de-projeção-de-conteúdo)
    1. [O problema com a projeção de conteúdo padrão](#o-problema-com-a-projeção-de-conteúdo-padrão)
    2. [ng-container vs. ng-template](#ng-container-vs-ng-template)
    3. [Inicializando um ng-template](#inicializando-um-ng-template)
    4. [Como Passar um ng-template via @Input() para outro componente](#como-passar-um-ng-template-via-input-para-outro-componente)
5. [PIPES](#5-pipes)
    1. [Como funcionam](#como-funcionam)
    2. [Pipes mais comuns no Angular](#pipes-comuns-do-angular)
    3. [Criando Pipes](#criando-pipes)
    4. [Utilizando o date Pipe](#utilizando-o-date-pipe)
    5. [Utilizando o decimal Pipe (number)](#utilizando-o-decimal-pipe-number)
    6. [Utilizando o currency pipe](#utilizando-o-currency-pipe)
    7. [Utilizando o Async Pipe](#utilizando-o-async-pipe)
    8. [Pipes puros e impuros](#pipes-puros-e-impuros)
    9. [Pipes ou Funções do Componente?](#pipes-ou-funções-do-componente)
   10. [Tratamento de erros nos pipes](#tratamento-de-erros-nos-pipes)
6. [TEMPLATE DRIVEN FORMS](#6-template-driven-forms)
    1. [O que é e como funcionam?](#o-que-é-e-como-funcionam)
    2. [Formulário](#formulário)
    3. [Grupos](#grupos)
    4. [Models](#models)
    5. [Propriedades e Métodos comuns](#propriedades-e-métodos-comuns)
    6. [Criando um ngModel Standalone dentro de um formulário](#criando-um-ngmodel-standalone-dentro-de-um-formulário)
    7. [Referenciando ngModels ou ngModelGroups em componentes separados ao formulário](#referenciando-ngmodels-ou-ngmodelgroups-em-componentes-separados-ao-formulário)
    8. [Criando Validações Síncronas](#criando-validações-síncronas)
    9. [Criando Validações Assíncronas](#criando-validações-assíncronas)
7. [REACTIVE FORMS](#7-reactive-forms)
    1. [O que é, como funciona, quando aplicar?](#o-que-é-como-funciona-quando-aplicar)
   2. [FormControl](#formcontrol)
   3. [FormGroup](#formgroup)
   4. [FormArray](#formarray)
   5. [FormBuilder](#formbuilder)
   6. [Form com Componentes Filhos](#form-com-componentes-filhos)
   7. [Validadores Assincronos](#validadores-assincronos)
   8. [Cross Validator](#cross-validator)
   9. [Adicionar e Remover Controls dinamicamente](#adicionar-e-remover-controls-dinamicamente)
8. [STANDALONE](#8-standalone)
    1. [Modularização Padrão do Angular](#modularização-padrão-do-angular)
   2. [Modularização SCAM - Single Component Angular Module](#modularização-scam---single-component-angular-module)
   3. [Standalone Project](#standalone-project)
   4. [Componentes Standalone](#componentes-standalone)
   5. [Usando NgIf, NgFor, Pipes, ...](#usando-ngif-ngfor-pipes-)
   6. [Criando um Pipe Standalone](#criando-um-pipe-standalone)
   7. [Criando uma Diretiva Standalone](#criando-uma-diretiva-standalone)
   8. [Injeção de Dependencia com Standalone](#injeção-de-dependencia-com-standalone)
   9. [Modulos ou Standalone?](#modulos-ou-standalone)
9. [ROTEAMENTO ESTÁTICO](#9-roteamento-estático)
    1. [Redirecionamento entre Rotas pelo RouterLink](#redirecionamento-entre-rotas-pelo-routerlink)
   2. [RouterLinkActive - Aplicando CSS a um Item de acordo com a Rota Ativada](#routerlinkactive---aplicando-css-a-um-item-de-acordo-com-a-rota-ativada)
   3. [Lazy-loading](#lazy-loading)
   4. [Como redirecionar para uma página de 404 Not Found](#como-redirecionar-para-uma-página-de-404-not-found)
   5. [Como configurar o título da Aplicação](#como-configurar-o-título-da-aplicação)
   6. [Nesting Routes (Rotas Filhas)](#nesting-routes-rotas-filhas)
   7. [RedirectTo](#redirectto)
   8. [Lazy-Loading de Nested Routes de forma Modular](#lazy-loading-de-nested-routes-de-forma-modular)
10. [ROTEAMENTO DINÂMICO COM ROUTERLINK E INPUT](#10-roteamento-dinâmico-com-routerlink-e-input)
    1. [Query Params](#query-params)
    2. [Query Strings](#query-strings)
    3. [Property Data](#property-data)
11. [ROTEAMENTO PROGRAMÁTICO COM ROUTER, GUARDS E RESOLVERS](#11-roteamento-programático-com-router-guards-e-resolvers)
    1. [Diretiva RouterLink x Service ActivatedRoute x Service Router](#diretiva-routerlink-x-service-activatedroute-x-service-router)
    2. [Service Router - Método Navigate()](#service-router---método-navigate)
    3. [RouteGuard](#routeguard)
    4. [Resolvers](#resolvers)
12. [OBSERVABLES E PROMISES](#12-observables-e-promises)
    1. [Observables](#observables)
        1. [Porque?](#porque)
       2. [Tipos](#tipos)
       3. [Como criar e executar um observable](#como-criar-e-executar-um-observable)
       4. [Métodos dos Observables (.pipe())](#métodos-dos-observables-pipe)
       5. [Utilizando Subject e BehaviorSubject](#utilizando-subject-e-behaviorsubject)
       6. [Observações sobre os Observables](#observações-sobre-os-observables)
    2. [Promises](#promises)
        1. [Como criar e executar uma promise](#como-criar-e-executar-uma-promise)
       2. [Fluxo Assíncrono da Promise](#fluxo-assíncrono-da-promise)
       3. [Funções de Promise](#funções-de-promise)
       4. [Utilizando Async - Await](#utilizando-async---await)
       5. [Transformando Observables em Promises](#transformando-observables-em-promises)
13. [CHAMADAS HTTP](#13-chamadas-http)
    1. [Maneira correta de manipular Headers](#maneira-correta-de-manipular-headers)
    2. [Ciclo de vida da HttpRequest no Angular](#ciclo-de-vida-da-httprequest-no-angular)
14. [INTERCEPTORS](#14-interceptors)

<hr/>

## 1. COMPONENTES E ESTILIZAÇÕES

### Componente

#### O que é:

- Uma lógica que deve ser reutilizada em outros locais diferentes.
- Pode receber variáveis.

#### Propriedade dos componentes:

```ts
  @Component({
    selector: 'app-<NAME>',
    templateUrl: './<NAME>.component.html',
    styleUrl: './<NAME>.component.scss',
  })
  export class <NAME>Component {
    // CODIGO DO COMPONENTE
  }
```
- selector: é o nome da tag para chamar o componente;
- templateUrl: é o caminho para o HTML do componente;
- template: é o HTML de modo inline dentro do arquivo .ts;
  - OBS.: caso seja utilizado o template, não deve ser utilizado o templateUrl
- styleUrl: é o caminho para o CSS, SCSS, etc. do componente;
- stylesUrl: é um array de caminhos para styles do componente;
- styles: é um arquivo de styles inline dentro do .ts;
  - OBS.: caso seja utilizado o styles, pode ser utilizado o stylesUrl ou o StyleUrl junto,
  o angular irá mesclar os dois, dando prioridade à:
    1. <style></style> dentro de template ou templateUrl;
    2. styles: ``;
    3. stylesUrl: ['segundo.scss', 'primeiro.scss'];
- encapsulation: encapsula o SCSS. Por default, ele afeta somente o do próprio componente.
  - viewEncapsulation.none: o SCSS do componente vira global (altera outros componentes);
  - viewEncapsulation.emulated: o SCSS do componente altera somente o proprio componente. É a configuração DEFAULT;
  - viewEncapsulation.shadowDom: o SCSS do componente altera somente o proprio componente e nada pode afetar o proprio componente,
  apenas pode afetar os componentes filhos.

------

### Módulos

#### O que é:

- Utilizado para organizar componentes que tem lógicas similares.

#### Propriedade dos módulos:

```ts
@NgModule({
  declarations: [
    AQUI VEM AS DECLARAÇOES DOS COMPONENTES DO MÓDULO
  ],
  imports: [
    AQUI VEM AS IMPORTAÇOES DOS MÓDULOS PARA USAR
    OS COMPONENTES DELES
  ],
  providers: [],
  bootstrap: [
    UTILIZADO PARA INICIALIZAR A APLICAÇAO (UTILIZADO
    NORMALMENTE APENAS COM O APP.MODULE.TS
  ]
})
export class <MODULE_NAME>Module { }

```
-----

#### Comparação:

*Uma estante de livros*

- A estante é a aplicação
- As divisões de seções são os módulos (ex.: terror, suspense, ...)
- Os livros são os componentes
  - Livros de terror devem estar na seçao de terror, etc...

------

#### Regras

- Componentes só podem ser declarados em um módulo. Para utilizar em outro módulo:
  - Exportar o componente no seu módulo.
  - No módulo onde deseja usar o componente, importar o **MODULO** do componente.
    - Modulos sempre se importam!
  - Desse modo, tudo que for exportado no módulo importado, pode ser usado no outro módulo.

-------

## 2. BINDING, DIRETIVAS, TEMPLATES E DECORATORS

### Elementos HTML:

#### Atributos:

- Setados no HTML, como, por exemplo, class, id, ...
- Tem 2 tipos, e cada elemento pode ou nao ter os dois, depende do elemento:
  - Atributos globais: class, id, etc...
  - Atributos de eventos: onclick, onmouseover, etc...

#### Propriedades:

- Quando a página é renderizada, é gerada uma árvore de propriedades pelo DOM.
- Essa arvore de propriedades torna os elementos configuraveis pelo DOM através
  de javascript/typescript.
- Exemplos: elemento.value, elemento.defaultValue, elemento.tagName, etc...

#### Resumo:

- Atributos são alterados diretamente no HTML.
- Propriedades são alteradas via javascript/typescript, e cada elemento possui um objeto
  de propriedades para ser acessado, criado no momento da renderização do elemento.

------

### Property Binding

#### [Property]="variable"

- Atribui a variável com a propriedade (direita para esquerda).
- É passado o valor da variável para a propriedade e renderizado o elemento.
- **Não passa o valor da propriedade para a variável!!!**

------

### Event Binding

#### (Event)="function()" // (Event)="function($event)

- Atribui o evento a uma função (esquerda para direita).
- É passada uma função que vai ser executada quando o evento acontecer.

------

### Attribute Binding

#### [attr.atribute]="variable"

- Atribui a variável com o atributo (direita para esquerda).
- É passado o valor da variável para o atributo diretamente.

------

### Style Binding

#### [style.\<STYLENAME\>]="Variavel" (*variavel tem que ser string*)

- Adiciona um Style \<STYLENAME\> CSS do componente (como se fosse adicionar ao atributo style)
- É passado o valor da variável para a propriedade style dinamicamente

------

### Class Binding

#### [class.\<CLASSNAME\>]="Variavel" (*variavel tem que ser boolean*)

- Adiciona uma classe \<CLASSNAME\> ao componente (como se fosse adicionar ao atributo class)
- É passada a classe ao lado de class., caso a variavel seja 'true',
  a classe é renderizada.

#### [class]="Variavel" -> variavel tem que ser string

- É passada a classe na variável, podendo ser uma ou mais classes.

#### [class]="{ '\<CLASSNAME\>' : variavel }" (*variavel tem que ser boolean*)

- É passado um objeto com classes, sendo a key o nome da classe \<CLASSNAME\> e seu valor
  um boolean para informar se ela é true ou false.

------

### Decorator @Input()

- Recebe os dados do componente pai através de Property Binding
  - Ex.:

(child.component.ts)
```angular181html
  @Input() original: type = value;
```

(parent.component.html)
```angular181html
  <component
    [original]="newValue"
  ></component>
```

#### Input('\<ALIAS\>')

- O valor de \<ALIAS\> é o nome da propriedade que vai ser usada para o Binding
  - Ex.:

(child.component.ts)
```angular181html
  @Input('alias') original: type = value;
```

(parent.component.html)
```html
  <component
    [alias]="newValue"
  ></component>
```


#### Input({required:true})

- Passando um objeto com required:true, faz com que o input seja obigado a ser
  preenchido quando o componente for chamado.
- Gera um erro em tempo de compilação, ou seja, não gera erro em tempo de execução.
  - Ex.:

(child.component.ts)
```angular181html
  @Input({required:true}) original: type = value;
```

(parent.component.html)
```html
  // Caso não seja definido um valor para o input [original]
  // um erro na compilação irá ocorrer.

  <component
    [original]="newValue"   
  ></component>
```

#### Input({required: \<boolean\>, alias: \<string\>, transform: \<function\>})

- Required = Faz com que o Binding seja obrigatorio;
- Alias = Cria um alias para a propriedade;
- Transform = Recebe uma função que irá retornar um valor do mesmo tipo do Input, podendo
  transformar o valor recebido, como, por exemplo, retirar espaços, etc.
  - Ex.:

(child.component.ts)
```angular181html
  @Input({
    required:true,
    alias: 'alias',
    transform: (value) => {transformedValue},
  }) original: type = value;
```

(parent.component.html)
```html
    <component
    [alias]="newValue"   
  ></component>
```

#### Input com get e set

- Usar get e set para receber um input pode ser útil caso seja necessário 'modificar'
  o input antes de salvá-lo ou mesmo mostrá-lo.
- Pode ser alterado no setter, alterando o valor salvo, ou alterado no getter, alterando
  apenas o valor mostrado. (Ou em ambos)
  - Ex.:

```ts
  private _variable: string = '';
  @Input() set variable(value: type){
      // Faz a transformação do valor recebido com value
      this._variable = value;
    }
    get variable(){
      // Retorna o valor para ser utilizado
      return this._variable;
    }
```

### Decorator @Output()

- Envia dados do componente filho para o componente pai
  - Ex.:

(child.component.ts)
```ts
  // Define qual será o nome do output e qual tipo de evento vai emitir
  @Output() outputName = new EventEmmiter<emitType>()
  // Define uma função para emitir o evento
  functionChildName(){ this.outputName.emit(value: emitType) }
```

(child.component.html)
```angular181html
  // Define uma ação para disparar a função que emite o evento
  <div (click)="functionChildName()"><div>
```

(parent.component.html)
```angular181html
  // Recebe o evento com seu valor dentro de uma função a ser
  // usada dentro do componente pai
  <child (outputName)="functionParentName($event)"></child>
```

(parent.component.ts)
```ts
  // Faz algo com o evento recebido (evento terá o mesmo valor do enviado no filho)
  functionParentName(event: emitType){
    console.log(event);
  }
// OBS.:
// - Não é obrigatório passar um valor no evento, pode ser apenas uma ação
//   como por exemplo o click de um botão retornando void, que apenas irá
//   disparar uma função no componente pai.
// - Sempre que for passado um valor para o evento, deve ser passado na função
//   estritamente como $event, caso contrário, ocorrerão erros.
```

#### Output('\<ALIAS\>')

- Passa um \<ALIAS\> para o Output. (*funciona do mesmo modo que para o input*)

------

### Two-Way-Data-Binding

- Sincroniza dois valores, mesclando Input() e Output() simultaneamente.
  - Ex.:

(component.html)
```angular181html
  <input type="text" [(ngModel)]="name" />
  <span> Nome digitado: {{ name }} </span>
```

(component.ts)
```ts
  public name: string = 'valor';
```

- [ngModel]="name"  ***(Input)***
- (ngModelChange)="handleName($event)"  ***(Output)***
- [(ngModel)]="name" ***(Input e Output)***
  - Todos métodos podem ser usados juntos!
  - Caso o output altere a variável e seja utilizado junto com ngModel,
    a prioridade é para a atribuição do **OUTPUT**!!

------

### Diretiva *ngIf="\<BOOLEAN\>"

- Realiza a renderização do elemento onde a diretiva está conforme o resultado.
- Caso seja false, nao renderiza o componente no DOM.
- Caso seja true, renderiza o componente no DOM.
- O Angular fica sempre verificando esse valor, sendo possível tornar um elemento
  visivel/invisível dinamicamente.
  - Ex.:

```html
  <div *ngIf="false">Não apareço no DOM</div>
  <div *ngIf="{}">Não apareço no DOM</div>
  <div *ngIf="[]">Não apareço no DOM</div>
  <div *ngIf="''">Não apareço no DOM</div>
  <div *ngIf="null">Não apareço no DOM</div>
  <div *ngIf="undefined">Não apareço no DOM</div>
  <div *ngIf="NaN">Não apareço no DOM</div>
  <div *ngIf="true">Apareço no DOM</div>
  <div *ngIf="{<objetos não vazios>}">Apareço no DOM</div>
  <div *ngIf="[<arrays não vazios>]">Apareço no DOM</div>
  <div *ngIf="'<strings não vazias'">Apareço no DOM</div>
```

- Para realizar um 'else', podemos usar o **ng-template**
- Podemos também usar o then-else com **ng-container** e **ng-template**
- Ex.:

```html
  // APENAS ELSE
  
  <div *ngIf="false; else elseTemplate"> SOU O IF </div>
  <ng-template #elseTemplate> // essa tag nâo é renderizada, somente o que está dentro
    <div>SOU O ELSE</div>
  </ng-template>
  
  // IF E ELSE SEPARADOS EM DOIS TEMPLATES
  
  <ng-container *ngIf="false; then trueTemplate; else falseTemplate"></ng-container>
  <ng-template #trueTemplate>
    <div>True Template</div>
  </ng-template>
  <ng-template #falseTemplate>
    <div>False Template</div>
  </ng-template>
```

------

### Diretiva *ngFor="let item of items"

- Realiza uma renderização com um laço 'for' em um componente, baseado em dados.
  - Ex.:

(component.html)
```angular2html
  <div class="list">
    <div class="item" *ngFor="let person of listPeople">
      <p class="item__name">{{person.name}}</p>
      <p class="item__age">{{person.age}}</p>
    </div>
  </div>
```

(component.ts)
```ts
  listPeople = [
    {name: 'Felipe', age: 25},
    {name: 'Maria', age: 22},
    {name: 'Pedro', age: 23},
    {name: 'Antonio', age: 24},
  ];
```

#### Mais Comum de ser utilizado
- *ngFor="let item of items; let i of index"
  - item é o valor iteravel dentro de items
  - i é o indice do array/objeto percorrido
  - **i tem que apontar sempre para INDEX** *(não pode ser outro nome)*

#### Outras props:

```angular2html
  <div *ngIf="listPeople" class="list">
    <div class="item"
         [class.item--odd]="isOdd"
         [class.item--highlighted]="isEven"
         *ngFor="
         let person of listPeople;  // valor iteravel
         let i = index;             // index do array/objeto
         let isOdd = odd;           // retorna true se for impar
         let isEven = even;         // retorna true se for par
         let isFirst = first;       // retorna true se for o primeiro valor
         let isLast = last;         // retorna true se for o último
    ">
      <p *ngIf="isFirst" class="item__name">É o primeiro</p> //será renderizado só no primeiro
      <p class="item__name">{{ i }} - {{person.name}}</p>
      <p class="item__age">{{person.age}}</p>
      <p *ngIf="isLast" class="item__name">É o último</p> //será renderizado só no último
    </div>
  </div>
```
------

### Diretiva de atributo NgStyle

- Deixa as propriedades passadas para ele de forma dinâmica.
- O angular fica monitorando por mudanças de atributo para renderizar em tempo de execução.
  - Ex.:

(component.html)
```angular181html
  <h1 [ngStyle]="{
    'font-size': fontSize + 'px',
    'color': textColor,
  }">
    TEXTO COM STYLES DINAMICOS
  </h1>
```

(component.ts)
```ts
  // Se esses atributos forem mudados em tempo de execução, o angular atualizara quase instantaneamente
  // como estilos do elemento

  fontSize: number = 15;
  textColor: 'white' | 'orange' = 'white'
```

------

### Diretiva de atributo NgClass

- Deixa as classes passadas atuando de forma dinâmica.
- O angular fica monitorando por mudanças de classes para renderizar em tempo de execução.
- Pode receber um objeto relacionando classes com booleanos (true ou false para definir se serão renderizadas)
- Pode receber uma string de classes, separadas por um espaço ('class1 class2 class3')
- Pode receber um array de classes (['classe1', 'classe2', 'classe3'])
- Pode receber um objeto de classes com booleanos ({'class1 class2' : true, 'class3' : true, 'class4' : false})
  - Ex.:

(component.html)
```html
  <h1 [ngClass]="{
    'is-green': isGreen',
    'is-white': !isGreen,
  }">
    TEXTO COM CLASSE DINAMICA
  </h1>
```

(component.ts)
```ts
  // Se esses atributos forem mudados em tempo de execução, o angular atualizara quase instantaneamente
  // como classe do elemento
  
  isGreen: boolean = false;
  toogleColor(){
    this.isGreen = !this.isGreen;
  }
```

(component.scss)
```scss
  .is-white{
    color = white;
  }
  
  .is-green{
    color = green;
  }
```

------

### Introdução aos Pipes

#### Para que servem e como usar:

- Transformam um valor eemm outro valor, reduzindo a logica dentro do template e atribuindo
  ao pipe.
- O angular fornece alguns pipes, como, por exemplo, 'uppercase', que transforma o texto
  para uppercase, 'json', que mostra um objeto sem precisar iterar sobre ele, ...
  - Ex.:

(component.html)
```angular181html
  <h1>{{ text | uppercase }}</h1>
  // Resultado será TEXTO
  
  <h1>{{ object | json }}</h1>
  // Resultado será { "name": "Nome", "age": 25 }
  // Sem a pipe seria [Object object]
```

(component.ts)
```ts
  text: string = 'texto';
  object = {
    name: 'Nome',
    age: 25
  };
```

#### Como criar um Pipe:

- A Pipe é uma classe e terá um decorator @Pipe({...}) para identificar ela.
- Dentro do decorator, terá uma configuração de 'name', que é o nome que
  será usado para usar a pipe no código. O nome deve fazer sentido e ser parecido
  com o nome da classe.
- Ela implementará a classe PipeTransform, que implementa o método 'transform'.
- O método transform recebe valor/valores e retorna valor/valores.
- Deve ser importado no módulo onde vai ser usado, ou tornado standalone para
  ser importado nos componentes diretamente.
  - Ex.:

(status-class.pipe.ts)
```ts
    import {Pipe, PipeTransform} from "@angular/core";
    
    @Pipe({
      name: 'statusClass'
    })
    export class StatusClassPipe implements PipeTransform{
      transform(status: number): string {
        const obj: {[key:number] : string} = {
          1: 'active',
          2: 'partial',
          3: 'blocked'
        };
        return obj[status];
      }
    }
```

(component.ts)
```ts
  pessoa1 = {
    nome: 'Lucas',
    status: 1
  };
  pessoa2 = {
    nome: 'Joao',
    status: 2
  }
  pessoa3 = {
    nome: 'Maria',
    status: 3
  }
```

(component.scss)
```scss
  body{
    color: white;
  }
  .active{
    background-color: green;
  }
  .partial{
    background-color: orange;
  }
  .blocked{
    background-color: red;
  }
```

(component.html)
```angular181html
  <h1 [class]="pessoa1.status | statusClass">{{ pessoa1.nome }}</h1> //Aplicada .active
  <h1 [class]="pessoa2.status | statusClass">{{ pessoa2.nome }}</h1> //Aplicada .partial
  <h1 [class]="pessoa3.status | statusClass">{{ pessoa3.nome }}</h1> //Aplicada .blocked
```

------

### Escopos e Parâmetros

#### Como funciona:

- Um componente pai nao consegue acessar variaveis do escopo do componente filho;
- Um componente filho consegue acessar variaveis do escopo do componente pai;
- Ex. com funções em JS:

```ts
    const funcaoPai = () => {
        let pai = 'pai';
       
        // IRA DAR ERRO, POIS O CONTEUDO DA FILHA NÃo ESTÁ
        // ACESSÍVEL PARA O PAI
        console.log(filha); 
        
        const funcaoFilha = () => {
            let filha = 'filha';
            
            // NÃO IRA DAR ERRO, POIS O CONTEUDO DE PAI ESTÁ
            // ACESSÍVEL PARA A FILHA
            console.log(pai);
        }
    }
```

- Ex. com template variables:

```html
    <div class="primo">
        // ESSA DECLARAÇÃO RESULTARA EM ERRO, POIS O inputPai 
        // NAO ESTÁ ACESSÍVEL NESSE ESCOPO
        {{ inputPai }}
    </div>

// QUANDO TEMOS UM *ngIf OU UM *ngFor, OU ALGUMA DIRETIVA,
// CRIAMOS UM ESCOPO NO COMPONENTE, FAZENDO COM QUE O QUE FOR
// REFERENCIADO DENTRO DELE NÃO SEJA ACESSÍVEL FORA

    <div class="pai" *ngIf="true">
        // ESSE TEMPLATE VARIABLE SÓ VAI SER ACESSÍVEL DENTRO
        // DO COMPONENTE PAI
        <input #inputPai>
        
        // ESSA DECLARAÇÃO RESULTARA EM ERRO, POIS O inputFilha 
        // NAO ESTÁ ACESSÍVEL NESSE ESCOPO
        {{ inputFilha }}
        
        <div class="filha" *ngIF="true">
            // ESSE TEMPLATE VARIABLE SÓ VAI SER ACESSÍVEL DENTRO
            // DO COMPONENTE FILHA
            <input #inputFilha>
            
            // ACESSÍVEL EM FILHA
            {{ inputPai }}
        
        </div>
    </div>
```

### Template Variables

#### Para que serve:

- Ter acesso a propriedades de um componente filho de forma dinâmica.

#### Como utilizar: ***(diretamente no HTML)***

- Usar o #\<NOME\> referencia o elemento a ser acessado;
- Usar o ngModel faz com que o Angular ative o changeDetection para o elemento,
  escutando as mudanças do elemento em tempo de execução;
- As propriedades podem ser acessadas através do uso de \<NOME\> referenciado
  no componente, seguido pela propriedade a ser acessada.
- Ex.:

(component.html)
```angular181html
    <input type="text" #meuInput ngModel />
    <span> Valor: {{ meuInput.valor }} </span>
```

(module.ts)
```ts
    import {FormsModule} from "@angular/forms";
    
    @NgModule({
        imports: [
            FormsModule
        ]
    })
    export class Module{ }
```

#### Como utilizar: ***(no Typescript)***

- As definições do componente no HTML serão iguais;
- No arquivo .ts podemos receber esse elemento através de uma função
  que retorne o proprio elemento, assim, temos acesso a ele dentro do
  arquivo para manipulações das propriedades.
- Ex.:

(component.html)
```angular181html
    <input type="text" #meuInput ngModel />
    <span> Valor: {{ meuInput.valor }} </span>
    <button (click)="onClick(meuInput)"> Receber Valor </button>
```

(component.ts)
```ts
    clicou(meuInput: HTMLInputElement){
    
        // PODEMOS ACESSAR AS PROPRIEDADES
        console.log(meuInput.value);
        
        // PODEMOS TAMBEM ALTERAR AS PROPRIEDADES
        meuInput.value = 'Novo texto';
    }
```

#### Como utilizar: ***(@ViewChild)***

- As definições do componente no HTML serão iguais;
- No arquivo .ts recebemos o template variable dentro do @ViewChild('\<NOME\>');
- Apos definir a ViewChild, definimos como iremos chamá-la no .ts e sua tipagem.
- Ex.:

(component.html)
```
    <input type="text" #meuInput>
    <button (click)="updateInputText()">Atualizar</button>
```

(component.ts)
```ts
    @ViewChild('meuInput') meuInputElement!: ElementRef<HTMLInputElement>;
    
    updateInputText(){
        this.meuInputElement.nativeElement.value = 'Novo texto!';
    }
```

#### Como acessar atributos e métodos do componente referenciado:

- Com @ViewChild() podemos acessar os métodos e alterar os atributos de um componente.
- Ex.:

(filho.ts)
```ts
  public attribute: string = 'some value';
  public method(value: string) {
    console.log(value);
  }
```

(pai.html)
```angular181html
  <filho #filhoRef></filho>
```

(pai.ts)
```ts
    @ViewChild('filhoRef') filho!: FilhoComponent;

  // METODO DO PAI QUE QUANDO ATIVADO IRÁ ACIONAR UMA
  // FUNÇÃO CRIADA NO FILHO, QUE IRÁ ACESSAR UM
  // ATRIBUTO CRIADO NO FILHO
  
  altFilhoMethod(){
    this.filho.method( this.filho.attribute );
  }
```

#### Acessar child na renderização do componente:

- Caso tentamos acessar o componente com @ViewChild no constructor da classe,
  ou até mesmo no ngOnInit, teremos um erro, pois nessas etapas do componente,
  os binds ainda não foram resolvidos.
- Para resolver esse problema, devemos utilizar o ***ngAfterViewInit***, que irá executar
  a view após os binds estarem resolvidos, sem gerar erros.
- Ex.:

(component.html)
```angular181html
  Meu Input:
    <input
      type="text"
      *ngIf="true"
      #meuInput>
```

(component.ts)
```ts
@ViewChild('meuInput') meuInput!: ElementRef<HTMLInputElement>;

  constructor() { // Executa primeiro
  }

  ngOnInit() { // Executa após o contructor
    // Daria erro pois o componente nao foi renderizado ainda.
    this.meuInput.nativeElement.focus();
  }

  // Executa após todos binds serem resolvidos
  
  ngAfterViewInit() { // Executa após o ngOnInit
    this.meuInput.nativeElement.focus();
  }
```

#### Usando @ViewChildren()

- Usamos o @ViewChildren para referenciar varios elementos de uma única vez
  em um template.
- Podemos controlar individualmente cada componente, ou controlar todos ao mesmo tempo.
- Podemos alterar propriedades, verificar se alguma children foi excluida/incluida, ...
- Ex.:

(componente.html)
```angular181html
  <button #meuButton 
    class="btn-{{ i }}" 
    *ngFor="let btn of buttonsList; let i = index"
    (click)="changeColor($event)"
  >
    {{btn}}  
  </button>

  <button (click)="resetButtons()">
    Resetar
  </button>

  <button (click)="first()">
    Pegar Primeiro
  </button>

  <button (click)="remove()">
    Remover Item
  </button>
```

(componente.ts)
```ts
  // Uma lista para gerar dinamicamente botões
  
  buttonsList = [
    'Botao 1',
    'Botao 2',
    'Botao 3',
  ];

  // Declaração dos botões dentro do ViewChildren
  // As declarações de viewChildren serão sempre do tipo QueryList
  // A tipagem do QueryList será do tipo dos elementos children
  
  @ViewChildren('meuButton') buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>

  // Com a estrutura do ngAfterViewInit podemos fazer manipulações de forma
  // correta ao inicializar o componente
  
  ngAfterViewInit() {
  
    console.log(this.buttonsEl);

    // Quando muda a estrutura do ViewChildren, atualiza os valores
    // OBS.: APENAS A ESTRUTURA, NÃO OS ATRIBUTOS E MÉTODOS DOS
    // ELEMENTOS CHILDREN
    
    this.buttonsEl.changes.subscribe(result => {
      console.log(result);
    })
  }

  // Podemos ter funções que recebem o elemento referenciado no $event
  // podendo assim, alterar um por vez quando algo relacionado ao elemento
  // ocorrer, podendo alterar suas propriedades
  
  changeColor(event: Event){
    const btnElement = event.target as HTMLButtonElement;
    btnElement.style.backgroundColor = 'Orange';
    btnElement.style.color = 'white';
  }

  // Podemos fazer um forEach, selecionando todos elementos e definindo
  // um comportamento ou mudança de propriedades à eles
  
  resetButtons() {
    this.buttonsEl.forEach(button => {
      button.nativeElement.style.color = 'black';
      button.nativeElement.style.backgroundColor = '';
    })
  }
  
  // Podemos selecionar apenas um elemento de várias formas,
  // como um nome de classe, sua posição dentro do array de
  // children, sua posição dentro da QueryList, etc...

  first(){

    // pegar com referencia a ordenação

    const primeiro = this.buttonsEl.get(0);
    console.log(primeiro);

    // pegar com referência a classe

    const primeiro = this.buttonsEl.find((btn) => (
      btn.nativeElement.className === 'btn-0'
    ));
    console.log(primeiro);

    // pegar com referencia ao array

    const primeiro = this.buttonsEl.toArray()[0];
    console.log(primeiro)
    
  }

  // Método que altera a estrutura dos elementos da
  // @ViewChildren, ativando o método change da mesma
  
  remove(){
    this.buttonsList.shift();
  }
```

### Criando Diretivas

#### Por que utilizar diretivas:

- As diretivas servem para reunir funções e atributos que irão se repetir em vário lugares,
  facilitando a manutenção do código, além de deixar os componentes mais limpos.

#### Como criar diretiva de atributo:

- As diretivas são classes que acessam os atributos e metodos de elementos/componentes que a usam;
- A diretiva @HostBinding() acessa e modifica os atributos de um elemento;
- A diretiva @HostListener() acessa metodos de um elemento, executando funções;
- De forma geral, todos atributos, propriedades e metodos de um elemento que são acessiveis no DOM
  e com property binding, também são acessíveis pelas diretivas.
- Ex.:

(component.html)
```angular181html
  <p directiveName> Component with directive </p>
```

(directive.ts)
```ts
  import {Directive, HostBinding, HostListener} from "@angular/core";
  
  
  @Directive({
    selector: '[directiveName]'
  })
  export class directiveNameDirective {
  
    // Acessando a propriedade de background color em styles
    // de todo elemento que usar essa diretiva
    
    @HostBinding('style.background-color') bgColor = 'transparent';
  
    // Acessa um método do elemento, modificando ou acionando
    // alguma função/propriedade de todo elemento que usar a diretiva
    
    @HostListener('mouseover') onMouseOver() {
      this.bgColor = 'orange';
    }
  
    @HostListener('mouseout') onMouseOut() {
      this.bgColor = 'transparent';
    }
  }
```

- Ex. de diretiva para modificar styles:

```ts
  import {Directive, HostBinding} from '@angular/core';
  
  @Directive({
    selector: '[appStyle]'
  })
  export class StyleDirective {
  
    // Acessando o atributo style
    @HostBinding('attr.style') attrStyle = 'background-color: orange; color: white';
  
    // Acessando a propriedade style, passando uma string
    @HostBinding('style') propStyle = 'background-color: orange; color: white';
  
    // Acessando a propriedade style, passando um objeto
    @HostBinding('style') propStyleObj = {
      backgroundColor: 'orange',
      color: 'white'
    }
  
    // Acessando separadamente duas propriedades de style
    @HostBinding('style.backgroundColor') backgroundColor = 'orange';
    @HostBinding('style.color') color = 'white';
    
    // Nunca acessar a propriedade ngStyle, pode causar problemas
  }
```

- Ex. de diretiva para modificar classes:

```ts
  import {Directive, HostBinding} from '@angular/core';
  
  @Directive({
    selector: '[appClass]'
  })
  export class ClassDirective {
  
    // Acessando o atributo class
    @HostBinding('attr.class') attrClass = 'meu-texto meu-size';
  
    // Acessando a propriedade class, passando uma string
    @HostBinding('className') className = 'meu-texto meu-size';
  
    // Acessando a propriedade class, passando um objeto
    @HostBinding('class') classObj = {
      'meu-texto': true,
      'meu-size': true
    };
    // Nunca acessar a propriedade ngClass, pode causar problemas
  }

```

- Ex. utilizando eventos:

```ts
import {Directive, HostListener} from '@angular/core';

  @Directive({
    selector: '[appListener]'
  })
  export class ListenerDirective {
  
    // Captura o evento de click, acionando o método onClick
    @HostListener('click') onClick() {
      console.log('clicou');
    }
  
    // Captura o evento de keyup, passando como parametro para a função onKeyUp
    // o evento (no caso do input, o que foi digitado no evento de keyup) e um segundo
    // parametro fixo, mas que pode ser variável também.
    @HostListener('keyup', ['$event', '"Meu Argumento"']) onKeyUp(event: KeyboardEvent, param2: string) {
      const fullText = (event.target as HTMLInputElement).value;
  
      console.log(fullText);
      console.log(param2);
    }
    // Todos eventos disponíveis no DOM e nos métodos de binding do angular
    // podem ser usados nas diretivas do mesmo modo que são usadas dentro
    // dos componentes.
  }
```

#### Como passar valores para as Diretivas

- Podemos passar valores de forma estática, como string, e as diretivas funcionando como
  atributos do elemento;
- Podemos passar valores de forma dinâmica, como variáveis, e as diretivas funcionando como
  propriedades do elemento;
- Para receber um valor na diretiva, usamos o @Input();
- Para receber um valor diretamente da diretiva, criamos o @Input com o mesmo nome da diretiva,
  assim, quando chamamos a diretiva no elemento, basta igualá-la ao que gostariamos de passar
  no input;
- Para usar mais de um input, passamos o nome da diretiva e depois o nome do input da diretiva
  que deve ser preenchido, igualado ao seu valor.
- Ex.:

(component.html)
```angular181html
  <input
    [appInputBackground] = "backgroundVar"  // passa uma variável - property
    tColor = "white"  // passa uma string - attribute
  >
  
  <input
    appInputBackground = "blue" // passa uma string - attribute
    [tColor] = "colorVar" // passa uma variável - property
  >
```

(component.ts)
```ts
  backgroundVar = 'green';
  colorVar = 'gray';
```

(directive.ts)
```ts
  import {Directive, HostBinding, HostListener, Input} from '@angular/core';

  @Directive({
    selector: '[appInputBackground]'
  })
  export class InputBackgroundDirectiveDirective {
  
    @Input() appInputBackground: string = 'white';
    @Input('tColor') textColor: string = 'black';
  
    @HostBinding('style.backgroundColor') bgColor: string = '';
    @HostBinding('style.color') color: string = '';
  
    @HostListener('focus') onFocus(): void {
      this.bgColor = this.appInputBackground;
      this.color = this.textColor;
    }
  
    @HostListener('blur') onBlur(): void {
      this.bgColor = 'white';
      this.color = 'black';
    }
  }
```

### ElementRef

#### Como funciona o ElementRef em componentes

- O ElementRef funciona como o document em Javascript, permitindo acesso ao DOM;
- Ele é mais específico, permitindo acesso ao DOM do componente.
- Pode ser passado com um ViewChild, ou como uma injeção de dependencia;
- Pode ser injetado dentro de uma diretiva também, para manipulações mais complexas;
- Não podemos fazer a injeção de dependencia de um ElementRef dentro de um service;
- Para usar dentro de um service, devemos passar como parâmetro dentro do método do service;
- Ex.:

(component.html)
```angular181html
  <div #minhaDiv></div>
  <div id="minha-outra-div"></div>
```

(component.ts)
```ts
  // Usando como viewChild

  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;
  
  ngAfterViewInit() {
    this.divEl.nativeElement.style.backgroundColor = 'orange';
    this.divEl.nativeElement.textContent = 'sou uma div';
    this.divEl.nativeElement.classList.add('minhaDiv');
  }
  
  // Instanciando ElementRef dentro de _elementRef

  constructor(private readonly _elementRef: ElementRef) {
  }

  ngOnInit(): void {
    const divEl = this._elementRef.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement;
    divEl.textContent = 'Sou a outra Div';
    divEl.classList.add('minha-outra-div');
    divEl.style.backgroundColor = 'blue';
    divEl.style.color = 'white';

    divEl.addEventListener('click', () => {
      console.log('Div clicada')
    });
  }
```

## 3. PROJEÇÃO DE CONTEÚDO E ESTILIZAÇÃO COM DIRETIVAS

### Projeção Básica de Conteúdo

#### \<ng-content\>PROJEÇÃO\</ng-content\>

- Criamos dentro de onde gostariamos de projetar um conteúdo;
- O conteúdo será projetado dentro do filho através do pai, dentro de
  ng-content.
- Ex.:
- 
(filho.html)
```angular181html
    <div class="filho">
        <ng-content>
        </ng-content>
    </div>
```

(pai.html)
```angular181html
    <app-filho>
        CONTEÚDO PROJETADO
    </app-filho>
```

- Caso tenhamos mais de um ng-content em um componente, o conteúdo será projetado
  no primeiro ng-content encontrado pelo angular.
- No caso do exemplo, o ng-content fora da div será encontrado primeiro.
- Ex.:

```html
(filho.html)

    <div>
        <ng-content>    // O conteúdo não será projetado aqui
        </ng-content>
    </div>

    <ng-content>    // O conteúdo será projedado aqui
    </ng-content>

(pai.html)

    <app-filho>
        CONTEUDO PROJETADO
    </app-filho>
    
```

### Especificando qual conteúdo será mostrado (***Select***)

- Especificamos o que será mostrado através do atributo `select` de <ng-content>

#### Por classe:

(filho.html)
```html
    <div class="filho">
        <ng-content select=".text">
        </ng-content>
    </div>
    <ng-content select=".subtitle"></ng-content>
```

(pai.html)
```html
    <app-filho>
        <p class="text">Paragrafo dentro</p>
        <p class="subtitle">Paragrafo fora</p>
    </app-filho>

// O resultado será uma div com o <p>Paragrafo dentro</p> dentro
// e um <p>Paragrafo fora</p> fora da div, logo após,
// todos dentro do seletor de app-filho
```

#### Por tag:

(filho.html)
```html
    <div class="filho">
        <ng-content select="p">
        </ng-content>
    </div>
    <ng-content select="button"></ng-content>
```

(pai.html)
```html
    <app-filho>
        <p>Paragrafo dentro</p>
        <button>Botão fora</button>
    </app-filho>

// O resultado será uma div com o <p>Paragrafo dentro</p> dentro
// e um <button>Botão fora</button> fora da div, logo após,
// todos dentro do seletor de app-filho
```

#### Por atributo:

(filho.html)
```angular2html
    <div class="filho">
        <ng-content select="[attrDentro]">
        </ng-content>
    </div>
    <ng-content select="[attrFora]"></ng-content>
```

(pai.html)
```html
    <app-filho>
        <p attrFora>Paragrafo fora</p>
        <button attrDentro>Botão dentro</button>
    </app-filho>

// O resultado será uma div com o <p>Paragrafo fora</p> dentro
// e um <button>Botão dentro</button> fora da div, logo após,
// todos dentro do seletor de app-filho
```

#### Estilizando os componentes projetados

- Só podemos estilizar o conteúdo projetado através do componente pai, ou seja,
  o componente que implementa a projeção de conteúdo.
- As modificações da "casca", será carregada para a "casca", porém, o que varia,
  ou seja, a projeção, deve ser alterada pelo pai.

### Diretiva com seletor de elementos

- Podemos criar uma @Directive que possua um seletor de elemento, se passando por uma tag

#### Modificando textos

- A diretiva, em seu `selector` terá o nome passado fora dos colchetes, no padrao de elementos
  do angular (\<app-......\>)
- Ex.:

```ts
  import {Directive, HostBinding, Input} from '@angular/core';
  
  @Directive({
    selector: 'app-selector-directive',
    host: { 'class': 'class-to-this-directive' }
  })
  export class SelectorDirective {
    @Input() @HostBinding('style.color') color: string = '';
  }
```
- Ao usarmos essa diretiva, a usaremos em forma de seletor.
- Ex.:

```angular2html
  <app-selector-directive color="red">
    <p>Paragrafo que será vermelho</p>
  </app-selector-directive>
```

#### Observação Importante!

- Podemos, como no exemplo anterior, combinar o @Input com o @HostBinding, gerando um input
  através de um bind diretamente.
- Como no caso anterior, estamos acessando o atributo `color` da diretiva diretamente,
  apenas usando `color="cor"`. Podemos, também, criar um alias no @Input() para usarmos o @HostBinding
  com outro nome ao ser chamado no componente.

### Multiplos seletores de diretiva

- Podemos utilizar mais de um tipo de seletor ao mesmo tempo em uma diretiva,
  como, por exemplo, por tag e por atributo, ao mesmo tempo.
- Ex.:

```ts
  import {Directive, HostBinding, Input} from '@angular/core';
  
  @Directive({
    selector: 'app-selector-directive, [appSelectorDirective]',
    host: { 'class': 'class-to-this-directive' }
  })
  export class SelectorDirective {
    @Input() @HostBinding('style.color') color: string = '';
  }
```

- Então podemos usar com o seletor ou com o atributo.
- Ex.:

```angular2html
  <app-selector-directive color="red">
    <p>Paragrafo que será vermelho</p>
  </app-selector-directive>

// OU

  <p appSelectorDirective color="red">
    Paragrafo que será vermelho
  </p>
```

## 4. TÓPICOS AVANÇADOS DE PROJEÇÃO DE CONTEÚDO

### O problema com a projeção de conteúdo padrão

- Caso eu tenha um componente sendo projetado dentro de um ng-content,
  e para projetar esse componente eu possua uma diretiva condicional (*ngIf),
  mesmo que a diretiva seja falsa, o componente será inicializado.
- Isso pode ser um problema caso no método onInit do componente haja
  código complexo, ou alguma requisição, ou algo que exija mais processamento.
- Ex.:

```html
(componente.ts)

    ngOnInit(){
        // Lógica complexa
    }

(filho.html)

  <div>
      <div *ngIf="false">
          <ng-content selector="app-componente"></ng-content>
      </div>
  </div>

(pai.html)

    <app-filho>
      <app-componente></app-componente>
    </app-filho>

// Como o ngIf é false, o componente não será renderizado
// porém, o ngOnInit do app-componente será disparado do mesmo modo.
```

### \<ng-container\> vs. \<ng-template\>

#### \<ng-container\>

- A tag de ng-container não será renderizada no DOM;
- É inicializado automaticamente;

#### \<ng-template\>

- A tag de ng-template, ao ser inicializada, também não é renderizada no DOM;
- Não é inicializado automaticamente, apenas quando especificar utilizando a
  diretiva ngTemplateOutlet;

### Inicializando um \<ng-template\>

#### Através de outro componente, com Template Variable

- O template será carregado dentro do container, disparando o método
  onInit dos componentes dentro do template.

```angular2html
    <ng-container *ngTemplateOutlet="template"></ng-container>

    <ng-template #template>
        MEU TEMPLATE
    </ng-template>
```

#### Através de uma condicional, com dois Templates

- Com uma condicional, carregando dentro de um container o template para condição verdadeira,
  e no else, caso necessário, o template para a condição falsa.

```angular2html
    <ng-container *ngIf="CONDITION; else falseTemplate">
          <ng-container *ngTemplateOutlet="trueTemplate"></ng-container>
    </ng-container>

    <ng-template #trueTemplate>
        TRUE
    </ng-template>
    <ng-template #falseTemplate>
        FALSE
    </ng-template>
```

#### Utilizando uma conditional e a templateOutlet no mesmo container

- Usamos o ngIf e o ngTemplateOutlet no mesmo container, porem, usamos
  o ngTemplateOutlet como uma diretiva de atributo.

```angular2html
    <ng-container 
        *ngIf="CONDITION; else falseTemplate"
        [ngTemplateOutlet]="trueTemplate">
    </ng-container>

    <ng-template #trueTemplate>
        TRUE
    </ng-template>
    <ng-template #falseTemplate>
        FALSE
    </ng-template>
```

#### Sem precisar usar o ngIf

- Podemos utilizar o ngTemplateOutlet chamando um ternário, direcionando para o template.

```angular2html
    <ng-container 
        *ngTemplateOutlet="CONDITION ? trueTemplate : falseTemplate">
    </ng-container>

    <ng-template #trueTemplate>
        TRUE
    </ng-template>
    <ng-template #falseTemplate>
        FALSE
    </ng-template>
```

#### Inicializando o componente automaticamente

- Podemos automaticamente inicializar um ng-template ou com um condicional na sua própria tag.
- Podemos também carregar um template no caso de `else` do condicional.
- ***IMPORTANTE***:
  - O ngIf não é uma Diretiva *ngIf, é uma diretiva de propriedade **[ngIf]**
  - Para fazer o else, podemos fazer **[ngIfElse]**

```angular2html
    <ng-template [ngIf]="CONDITION" [ngIfElse]="falseTemplate">
        TRUE
    </ng-template>
    <ng-template #falseTemplate>
        FALSE
    </ng-template>
```

### Como Passar um ng-template via @Input() para outro componente

- Podemos passar um ng-template via @Input() de um componente para outro.
- O @Input será do tipo TemplateRef<any>

(pai.html)
```angular181html
    <ng-template #headerTemp>
        Header
    </ng-template>
    <ng-template #bodyTemp>
        Body
    </ng-template>
    <ng-template #footerTemp>
        Footer
    </ng-template>
    
    <app-filho
      [header]="headerTemp"
      [body]="bodyTemp"
      [footer]="footerTemp"
    >
    </app-filho>
```

(filho.ts)
```ts
    @Input() header!: TemplateRef<any>;
    @Input() body!: TemplateRef<any>;
    @Input() footer!: TemplateRef<any>;
```

(filho.html)
```angular181html
    <ng-container *ngTemplateOutlet="header"></ng-container>
    <ng-container *ngTemplateOutlet="body"></ng-container>
    <ng-container *ngTemplateOutlet="footer"></ng-container>
```

## 5. PIPES

### Como funcionam:

- Os pipes transformam um texto ou um conteudo
  sem alterar a instancia original do elemento

(component.ts)
```ts
    pessoa = {
        nome: 'Nome',
        idade: 20,
    }
```

(component.html)
```angular181html
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

(example.pipe.ts)
```ts
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

(component.ts)
```ts
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
```

(component.html)
```angular181html
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

### Pipes ou Funções do Componente?

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

## 6. TEMPLATE DRIVEN FORMS

### O que é e como funcionam?

- É usada para formulários com validações mais simples,
  tratando o dado com o ngModel
- Usando a diretiva ngModel, teremos acesso a varios métodos
  da diretiva, como `valid`, `touched`, `dirty`, `value`, etc.
- Ex.:

(component.html)
```html
    <input ngModel #inputFormControl="ngModel" minlength="5" required><br><br>
    
    <!--TODOS VALORES RETORNADOS SÃO ATUALIZADOS A CADA MUDANÇA DEVIDO AO NGMODEL-->
    
    <!--Retorna se o campo é valido baseado nas condições do input-->
    Valid: {{inputFormControl.valid}} <br>
    <!--Retorna se o campo foi clicado dentro depois fora em algum momento-->
    Touched: {{inputFormControl.touched}} <br>
    <!--Retorna se o campo ja foi preenchido alguma vez-->
    Dirty: {{inputFormControl.dirty}} <br>
    <!--Retorna o valor do formulario-->
    Value: {{inputFormControl.value}} <br>
    <!--Retorna um observable com VALID ou INVALID dependendo das condições-->
    Status Changes (async): {{inputFormControl.statusChanges | async}} <br>
    <!--Retorna um observable com o valor do formulário-->
    Value Changes (async): {{inputFormControl.valueChanges | async}} <br>
```

(component.ts)
```ts
    // PODEMOS SALVAR EM TEMPO REAL OS VALORES DO INPUT
    // EM UMA VARIAVEL OU EM UM ARRAY OU ATÉ EM UM OBJETO

    @ViewChild('inputFormControl') inputFormControl!: NgModel;
    
    form = {
        input: '',
        status: false
    }
    ngAfterViewInit(): void {
    
        if(this.inputFormControl.valueChanges){
            this.inputFormControl.valueChanges.subscribe(
                value => {
                    this.form.input = value;
                }
            )
        }
        if(this.inputFormControl.statusChanges){
            this.inputFormControl.statusChanges.subscribe(
                status => {
                    if(status && status === "INVALID"){
                        this.form.status = false;
                    }
                    else{
                        this.form.status = true;
                    }
                    console.log(this.form);
                }
            )
        }
    }
```

- Podemos também criar mensagens de erros dedicadas para as validações
- Podemos também alternar classes dependendo do status do formControl
- Ex.:

```angular181html
    <input ngModel #inputFormControl="ngModel" minlength="5" required><br>
    <div *ngIf="inputFormControl.invalid && inputFormControl.touched"
         [ngClass]="inputFormControl.valid ? 'valid' : 'invalid'">
        <div *ngIf="inputFormControl.hasError('required')">
            O campo nome é obrigatório
        </div>
        <div *ngIf="inputFormControl.hasError('minlength')">
            O campo nome deve ter pelo menos 5 caracteres
        </div>
    </div>
```

### Formulário:

- O formulário será a tag `<form>` do HTML.
- Para referenciar um formulário, podemos fazer:

```angular181html
<form #form="ngForm">
  ...
</form>
```

- O `ngForm` faz com que tenhamos acesso ao formulário e suas ngModels.
- O uso de `ngForm` nos permite usar o método `(ngSubmit)`, que irá submeter o formulário.
- Quando usamos o `ngForm`, como é relacionado a ngModel, por padrão, atualiza seus valores e propriedades
  a cada alteração, o que pode se tornar problemático em alguns casos. Para isso, podemos configurar sua
  propriedade `[ngFormOptions]`, que receberá um objeto com o valor de `updateOn` setado como `blur`, `change` ou `submit`

```angular181html
<form #form="ngForm" 
      (ngSubmit)="onSubmit(form)"
      [ngFormOptions]="
      {
        updateOn: 'change',
      }"
>
  ...
</form>
```

- Por padrão, `updateOn` vem definido como `change`, atualizando o formulário a todas mudanças relacionadas a ele.
- Caso seja selecionado `blur`, o formulario só será atualizado quando for clicado em um campo e depois fora dele.
- Caso seja selecionado `submit`, o formulario só será atualizado quando for submetido.

### Grupos

- Para melhor organização dos formulários, podemos organiza-los em grupos, com a diretiva `ngModelGroup`

```angular181html
  <form #form="ngForm" 
        (ngSubmit)="onSubmit(form)"
  >
    <ng-container ngModelGroup="grupoUm" #grupoUm="ngModelGroup">
      ...
    </ng-container>
    <ng-container ngModelGroup="grupoDois" #grupoDois="ngModelGroup">
      ...
    </ng-container>
  </form>
```

- Ao agruparmos os campos do formulário, conseguimos separar a resposta e organizar o código.
- Conseguimos também fazer validações específicar para aquele grupo.

```angular181html
  <ng-container ngModelGroup="grupoUm" #grupoUm="ngModelGroup">
      ...
    <p *ngIf="grupoUm.invalid">Formulário Inválido</p>
  </ng-container>
```

- A resposta de um formulário com uma separação por grupos ficaria:

```json
  {
    "grupoUm": {
      ...
    },
    "grupoDois": {
      
    }
  }
```

### Models

- Podemos controlar inputs, seus valores, suas propriedades e ter acesso a muitas
  funções referentes ao estado do componente através do `ngModel`.

```angular181html

  <input ngModel #inputFormControl="ngModel">

```

- O `ngModel` pode ser usado como diretiva, apenas referenciando um componente model de um
  formulário, como um input.
- O `ngModel` pode ser passado como `input`, e tendo seu respectivo output como `ngModelChange`,
  que retornará o valor do input através do `$event` atribuído ao método.
- O `ngModel` pode ser usado como um 2-way-data-binding, sendo usado como input e output ao mesmo tempo.

```angular181html
<!--    Como diretiva, podendo ser acessado seu valor através de {{ inputFormControl.value }}-->
    <input ngModel #inputFormControl="ngModel">

<!--    Como input e output separados, podendo ser acessados pelo component.ts para manipulações do dado-->
    <input [ngModel]="value" (ngModelChange)="onChange($event)" #inputFormControl="ngModel">

<!--    Como 2-way-data-binding, sendo input e output ao mesmo tempo e manipulando o dado nos dois sentidos-->
<!--    Pode-se fazer um getter e um setter no component.ts para manipular o dado, trabalhando-o como se fosse-->
<!--    com input e output separados-->
    <input [(ngModel)]="value" #inputFormControl="ngModel">
```

### Propriedades e Métodos comuns:

- Tanto o `ngForm`, o `ngModelGroup` e o `ngModel` possuem propriedades e métodos úteis a serem acecssados.
- Atributos e Métodos mais comuns de serem utilizados:

```angular181html
<input ngModel #formControl="ngModel">

<!--    Propriedades úteis-->
  Value: {{formControl.value}}
  Valid: {{formControl.valid}} <br>
  Touched: {{formControl.touched}} <br>
  Dirty: {{formControl.dirty}} <br>
  Pristine: {{formControl.pristine}} <br>
  Value: {{formControl.value}} <br>
  IsDisabled: {{formControl.isDisabled}} <br>
  Errors: {{formControl.errors}} <br>
  Pending: {{formControl.pending}} <br>

<!--    Métodos Assincronos, que retornam observables-->
  Status Changes (async): {{formControl.statusChanges | async}} <br>
  Value Changes (async): {{formControl.valueChanges | async}} <br>

<!--    Métodos Síncronos, que retornam valores-->
  getError: {{formControl.getError('errorCode')}} <br>
  hasError: {{formControl.hasError('errorCode')}} <br>
  reset: {{formControl.reset()}} <br>
  disable: {{formControl.disable()}} <br>
  enable: {{formControl.enable()}} <br>
```

### Criando um ngModel Standalone dentro de um formulário

- Ao utilizarmos um control do tipo standalone dentro de um formulário,
  teremos o comportamento de que o seu valor não será incluso no
  formulário que o engloba, porém, ainda poderemos ter acesso ao
  seu valor através do binding do ngModel ou de sua referência.

```angular181html
<!--    O componente #alone não aparecerá dentro do formulário #form, porém-->
<!--    pode ser ainda acessado através do #alone ou pelo ngModel com databind-->
  
  <form #form="ngForm">
      <input
              type="text"
              name="alone"
              ngModel #alone="ngModel"
              [ngModelOptions]="{ standalone: true }"
              required
      >
  </form>
```

### Referenciando ngModels ou ngModelGroups em componentes separados ao formulário

- Podemos separar um formulário em componentes menores, que serão relacionados em um componente pai.
- Para isso, devemos inserir dentro dos `filhos.ts` o seguinte provider:

```ts
import {Component} from '@angular/core';
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class ChildComponent {
    
}
```

- Podendo ser seu html um grupo ou um ngModel, ou um grupo de grupos, etc:

```angular181html
<!--    Como um ngModelGroup:-->
  <ng-container ngModelGroup="grupoUsuario" #grupoUsuario="ngModelGroup">
    <h2>Dados do Usuário</h2>
    <input type="text" name="nome" ngModel placeholder="Nome" required>
    <input type="text" name="idade" ngModel placeholder="Idade" required>
  
    <b>Estado do usuário: </b>
    <p>Válido: {{grupoUsuario.valid}}</p>
  </ng-container>

<!--    Como ngModel:-->
  <h2>Dados do Usuário</h2>
  <input type="text" name="nome" ngModel placeholder="Nome" required>
  <input type="text" name="idade" ngModel placeholder="Idade" required>
```

### Criando Validações Síncronas:

- Podemos criar validações síncronas ao criarmos diretivas que estendem a classe `Validator`
  e utilizando estas diretivas no componente de formulário desejado, podendo ser
  um ngModel, um ngModelGroup ou até um ngForm.
- Para criar uma validação específica, devemos fazer:

```ts
  import { Directive } from '@angular/core';
  import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
  
  @Directive({
    selector: '[appSyncronousValidation]',
    providers: [
      {
        provide: NG_VALIDATORS,
        useExisting: SyncronousValidationDirective,
        multi: true,
      }
    ]
  })
  export class SyncronousValidationDirective implements Validator {
      
      validate(control: AbstractControl<any, any>): ValidationErrors | null {
          
          // REGRAS DE VALIDAÇÃO, PODENDO RETORNAR: 
        
        //UM ERRO DO TIPO VALIDATION ERRORS
          return { 'customErrorCode': 'custom error message' }
        
        //NULL EM CASO DE DADO VALIDADO COM SUCESSO
          return null;
      }
  }
```

- Para utilizarmos nossa validação em um componente, devemos fazer:

```angular181html
<form #form="ngForm" appSyncronousValidation>
    ...
    <p *ngIf="form.hasError('customErrorCode')">    <!--Verificando a presença de erro-->
      {{ form.getError('customErrorCode') }}        <!--Informando a mensagem de erro -->
    </p>
</form>
```

### Criando Validações Assincronas:

- Podemos criar validações assíncronas ao criarmos diretivas que estendem a classe `AsyncValidator`
  e utilizando estas diretivas no componente de formulário desejado, podendo ser
  um ngModel, um ngModelGroup ou até um ngForm.
- Para criar uma validação específica, devemos fazer:

```ts
import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {delay, map, Observable, of} from 'rxjs';
import {SomeService} from "../services/some.service";   //PEGANDO DADOS DE UMA REQUISIÇÃO

@Directive({
  selector: '[appAsyncronousValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() =>  AsyncValidatorDirective),
      multi: true,
    }
  ]
})
export class AsyncValidatorDirective implements AsyncValidator {

  constructor(private readonly someService: SomeService) {
  }
    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      // PODEMOS VERIFICAR SE O CONTROL A SER VALIDADO FOI MEXIDO ANTES DE FAZERMOS ALGUMA REQUISIÇÃO
      // RETORNANDO UM OBSERVABLE (METODO DO RXJS) COM UM VALOR null
        if(!control.dirty){
            return of(null);
        }

      // FAZEMOS UM OBSERVABLE PARA VERIFICAR DADOS E RETORNAR ALGUM VALOR AO NOSSO COMPONENTE  
        return this.someService.getData().pipe(
          // CASO SEJA NECESSÁRIO REALIZAR DELAYS (METODO DO RXJS)
            delay(3000),
          // CASO TENHA QUE SER ACESSADO ALGUMA VARIAVEL DA RESPONSE E FAZER VERIFICAÇÕES (METODO DO RXJS)
              map((values) => {
                const foundValue = values
                    .filter((value) => value.parameter === control.value)
                    .map(value => value.parameter);
              // CONDIÇÃO CASO SEJA VÁLIDO, RETORNANDO null
                if(foundValue.length > 0){
                    return null;
                }
              // CONDIÇÃO CASO SEJA VÁLIDO, RETORNANDO UM ERRO DO TIPO VALIDATION ERRORS
                return { 'notFoundValue': 'Value not found' };
              })
        );
   }
}
```

- Para utilizarmos nossa validação podemos:

```angular181html
<form #form="ngForm">
  <!--Definido [ngModelOptions]="{updateOn: 'blur'}" para evitar requisições excessivas desnecessariamente-->
  <input
          type="text"
          name="value"
          id="value"
          ngModel
          #value="ngModel"
          appAsyncronousValidator
          [ngModelOptions]="{updateOn: 'blur'}"
          >
  <div *ngIf="value.dirty">   
    <!--Enquanto não encontra o dado, mostra a mensagem 'Verificando...'-->
    <span *ngIf="value.pending">Verificando...</span>
    <span 
        *ngIf="!value.hasError('notFoundValue') &&
        value.valid &&
        !value.pending"
    >
        Usuario existente  <!--Caso encotre o dado, mostra a mensagem 'Usuário existente'-->
    </span>
    <span
        *ngIf="value.hasError('notFoundValue') &&
        value.invalid &&
        !value.pending"
    >
        {{value.getError('notFoundValue')}} <!--Caso não enocontre, retorna a mensagem criada no Validator-->
    </span>
  </div>
</form>
```

## 7. REACTIVE FORMS

### O que é, como funciona, quando aplicar?

- É usado para formulários com validações complexas;
  tratando o dado inteiramente no componente;
- Possui o elemento de controle formControl, o elemento de grupamento
  de controles formGroup, o elemento de array de controls formArray e
  o serviço de construção de formulários formBuilder;
- Para utilizar os formControls, precisamos adicionar ao módulo, caso não seja StandAlone:
```ts
    ...
    imports: [
      ReactiveFormsModule,
    ],
    ...
```
- Possui as mesmas propriedades do Template Driven Forms:
  - Valid
  - Touched
  - Dirty
  - Value
- Etc...

(component.html)
```angular181html
    <label for="example">Example: </label>
    <input type="text"
           id="example"
           [formControl]="formInput">
    
    <!--TODOS VALORES RETORNADOS SÃO ATUALIZADOS A CADA MUDANÇA DEVIDO AO NGMODEL-->
    
    <!--Retorna se o campo é valido baseado nas condições do input-->
    Valid: {{formInput.valid}} <br>
    <!--Retorna se o campo foi clicado dentro depois fora em algum momento-->
    Touched: {{formInput.touched}} <br>
    <!--Retorna se o campo ja foi preenchido alguma vez-->
    Dirty: {{formInput.dirty}} <br>
    <!--Retorna o valor do formulario-->
    Value: {{formInput.value}} <br>
    <!--Retorna um observable com VALID ou INVALID dependendo das condições-->
    Status Changes (async): {{formInput.statusChanges | async}} <br>
    <!--Retorna um observable com o valor do formulário-->
    Value Changes (async): {{formInput.valueChanges | async}} <br>
```

(component.ts)
```ts
    formInput = new FormControl(
        {
            value: 'Inicial', // valor inicial
            disabled: false // define se o componente já é criado desabilitado
        },
        {
            nonNullable: true, // quando for resetado, nao pode ser nulo
            updateOn: 'blur', // apenas atualiza quando clicado fora do input
            validators: [
                Validators.required,
                Validators.minLength(6),
                invalidTextValidator('invalid')
            ], // validators
            asyncValidators: [
                // Validators assincronos
            ]
        }
    );

    ngOnInit() {
        // Verifica as mudanças de valor conforme o 'updateOn'
        this.formInput.valueChanges.subscribe(
            value => console.log(value)
        );
        // Verifica as mudanças de status conforme o 'updateOn'
        this.formInput.statusChanges.subscribe(
            status => console.log(status)
        );
    }   
```

### FormControl

- Para definirmos um elemento como formControl individual:

```angular181html
    <label for="example">Example: </label>
    <input type="text" id="example"
          [formControl]="formControl">
```

```ts
    import {FormControl} from "@angular/forms";

    formControl = new FormControl(
        {
            value: 'Inicial', // valor inicial
            disabled: false // define se o componente já é criado desabilitado
        },
        {
            nonNullable: true, // quando for resetado, nao pode ser nulo
            updateOn: 'blur', // apenas atualiza quando clicado fora do input
            validators: [
                // Validadores sincronos 
            ], 
            asyncValidators: [
                // Validators assincronos
            ]
        }
    );
```

- Para alterarmos o valor de um formControl individual:

```ts
    alterarValor(){
        this.formControl.setValue('Novo valor');
    }
```

- Para ler o valor de um formControl individual:

```ts
    inputAlterado(){
    console.log(this.formControl.value);
    }
```

- Para desabilitar um formControl individual:

```ts
    desabilitar() {
    this.formControl.disable();
    }
```

- Para habilitar um formControl individual:

```ts
    habilitar() {
    this.formControl.enable();
    }
```

- Para resetar um formControl individual:

```ts
  // Para resetar o valor (define o valor para null)  
    resetar() {
    this.formControl.reset();
    }
    // Para resetar e passar um valor novo (define o valor para o desejado)
    resetarComValorInicial() {
        this.formControl.reset('Valor Reset');
    }
```

- Para definir um validador de forma dinâmica:

```ts
    // Este metodo sobrescreve todos validadores
    setValidators() {
        // o metodo setValidators SOBRESCREVE todos validadores
        this.nome.setValidators([]);
        this.nome.setValue('FE');
        this.nome.setValidators(Validators.minLength(6));
        // caso esse metodo nao seja chamado, ele nao irá validar
        // os valores atuais com base nos novos validadores
        this.nome.updateValueAndValidity();
    }
    // Este metodo adiciona um validador ao formControl
    addValidators() {
        // o metodo addValidators ADICIONA o validador
        this.nome.addValidators([Validators.required]);
        // caso esse metodo nao seja chamado, ele nao irá validar
        // os valores atuais com base nos novos validadores
        this.nome.updateValueAndValidity();
    }
```

### FormGroup

- Um formGroup possui todas propriedades de um formControl.
- Serve para agrupar formControls e atá outros formGroups.
- Para definir um formGroup com formControls e/ou formGroups dentro:

```angular181html
    <form [formGroup]="generalGroup" (ngSubmit)="submit()">
        <label for="example">Example: </label>
        <input type="text" id="example" formControlName="controlChild">
  
        <div formGroupName="groupChild">
          <label for="newExemple">New Example: </label>
          <input type="text" id="newExample" formControlName="newChild">
        </div>
    </form>
```

```ts
    import {FormControl, FormGroup} from "@angular/forms";

    generalGroup = new FormGroup({
      controlChild: new FormControl(...),
      groupChild: new FormGroup({
        newChild: new FormControl(...),
      }),
    },
    {
       // Validators, AsyncValidators, updateOn, ... 
    });
```

- Para ver o valor de um formControl específico de dentro do formGroup:

```ts
    // Usar um getter é uma boa forma de simplificar
    // o código ao verificar propriedades de um child
    get controlChild(): FormControl {
      return this.generalGroup.get('controlChild') as FormControl;
    }
    
    viewControlChild() {
        console.log(this.controlChild.value);
    }
```

- Para ver o valor de um formGroup ou de um formControl dentro de outro formGroup:

```ts
    // define o getter do grupo
    get groupChild(): FormGroup {
        return this.generalGroup.get('groupChild') as FormGroup;
    }
    // define o getter do control do grupo
    get newChild(): FormControl {
        return this.groupChild?.get('newChild') as FormControl;
    }
    
    viewGroupAndControl() {
        console.log(this.groupChild.value);
        console.log(this.newChild.value);
    }
```

- Para alterar os valores do formGroup:

```ts
    alteracaoTotal() {
    // Redefine todos valores de controls
      this.generalGroup.setValue({
        controlChild: 'Control Reescrito',
        groupChild: {
          newChild: 'Control Child Reescrito',
        }
      })
    }
    alteracaoParcial() {
      // Altera apenas os valores desejados
      this.generalGroup.patchValue({
        groupChild: {
          newChild: 'Control Child Reescrito',
        }
      })
    }
```

#### Obs.: Todos demais métodos e propriedades de formControl estão disponíveis também para o formGroup

### FormArray

- Um formArray serve para agrupar controls (tanto simples quando grupos) em arrays;
- Estes arrays podem se tornar dinâmicos, armazenando valores dependendo do seu índice.

```angular181html
    <form [formGroup]="musicasForm">
      <button (click)="adicionarMusica()">Adicionar</button>
      <div formArrayName="musicas">
        <div *ngFor="let musica of musicas.controls; let i = index" [formGroupName]="i">
          <label [for]="'titulo_'+i">Titulo</label>
          <input type="text" [id]="'titulo_'+i" formControlName="titulo">
          <label [for]="'banda_'+i">Banda</label>
          <input type="text" [id]="'banda_'+i" formControlName="banda">
          <button (click)="removerMusica(i)">Remover</button>
        </div>
      </div>
    </form>
```
```ts
    musicasForm = new FormGroup({
      musicas: new FormArray([
        new FormGroup({
          titulo: new FormControl('', Validators.required),
          banda: new FormControl('', Validators.required),
        })
      ])
    })

    get musicas(): FormArray{
      return this.musicasForm.get('musicas') as FormArray;
    }
    
    adicionarMusica() {
      this.musicas.push(new FormGroup({
        titulo: new FormControl('', Validators.required),
        banda: new FormControl('', Validators.required),
      }))
    }
    
    removerMusica(i: number) {
      this.musicas.removeAt(i)
    }
```

### FormBuilder

- FormBuilder é um serviço do Angular que facilita o processo de criação de formulários reativos.
- Com ele se torna mais simples criar formulários, adicionar controls dinamicamente, etc.

```ts
    pessoaForm!: FormGroup;
    constructor(private readonly fb: FormBuilder) {}
    
    ngOnInit() {
      this.pessoaForm = this.fb.group({
        nome: ['', [Validators.required]],
        email: this.fb.control('', { validators: [Validators.required] }),
        endereco: this.fb.group({
          rua: ['', [Validators.required]],
          numero: ['', [Validators.required]],
        }),
        musicas: this.fb.array([{
          informacao: this.fb.group({
            nome: ['', [Validators.required]],
            artista: this.fb.control('', { validators: [Validators.required] }),
          }),
        }])
      })
    
      console.log(this.pessoaForm.value)
    }
```

- Podemos ter formBuilders com classes externas para evitar a repetição de código. Isso pode ser feito de duas maneiras:
  - Extendendo uma classe:

```ts
(classe-externa.ts)

    import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
    
    export class PessoaFormController {
      pessoaForm!: FormGroup;
      constructor(private readonly fb: FormBuilder) {
        this.pessoaForm = this.fb.group({
          nome: ['', [Validators.required]],
          email: this.fb.control('', { validators: [Validators.required] }),
          endereco: this.fb.group({
            rua: ['', [Validators.required]],
            numero: ['', [Validators.required]],
          }),
          musicas: this.fb.array([
            this.fb.group({
              nome: ['', [Validators.required]],
              artista: this.fb.control('', { validators: [Validators.required] }),
            }),
          ])
        })
      }
    
      get musicas(): FormArray{
        return this.pessoaForm.get('musicas') as FormArray;
      }
    
      pushMusicas() {
        this.musicas.push(
                this.fb.group({
                  nome: ['', [Validators.required]],
                  artista: ['', [Validators.required]],
                })
        )
      }
    
      removeMusicas(i: number){
        this.musicas.removeAt(i);
      }
    }

(classe-principal.ts)

    import {Component, OnInit} from '@angular/core';
    import {PessoaFormController} from "./pessoa-form-controller";
    import {FormBuilder} from "@angular/forms";
    
    @Component({
      selector: 'app-form-builder-external',
      template: `
          <form [formGroup]="pessoaForm">
              Nome: <input type="text" formControlName="nome"><br>
              Email: <input type="text" formControlName="email"><br>
              Endereco: <br>
              <div formGroupName="endereco">
                  Rua: <input type="text" formControlName="rua"><br>
                  Numero: <input type="text" formControlName="numero">
              </div>
              <button (click)="pushMusicas()">Add Musica</button>
              <div formArrayName="musicas">
              <div *ngFor="let musica of musicas.controls; let i = index" [formGroupName]="i">
                      Nome: <input type="text" formControlName="nome"><br>
                      Artista: <input type="text" formControlName="artista">
              <button (click)="removeMusicas(i)">Excluir musica</button>
              </div>
              </div>
          </form>
      `,
      styleUrl: './form-builder-external.component.scss'
    })
    // Extendemos a classe na declaração dela
    export class FormBuilderExternalComponent extends PessoaFormController implements OnInit {
        
      // Precisamos passar para a classe extendida uma instancia do formBuilder através do super();
      constructor(
              private readonly _fb: FormBuilder,
      ) {
        super(_fb);
      }
      ngOnInit() {
        console.log(this.pessoaForm.value)
      }
    }
```

- Podemos, também, usar um serviço para "extender" a classe principal, injetando ele na classe.

```ts
(serviço-que-será-usado.service.ts)

    import { Injectable } from "@angular/core";
    import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
    
    @Injectable({
      providedIn: 'root'
    })
    export class PessoaFormControllerService {
      pessoaForm!: FormGroup;
      constructor(
        private readonly fb: FormBuilder
      ) {
        this.pessoaForm = this.fb.group({
          nome: ['', [Validators.required]],
          email: this.fb.control('', { validators: [Validators.required] }),
          endereco: this.fb.group({
            rua: ['', [Validators.required]],
            numero: ['', [Validators.required]],
          }),
          musicas: this.fb.array([
            this.fb.group({
              nome: ['', [Validators.required]],
              artista: this.fb.control('', { validators: [Validators.required] }),
            }),
          ])
        })
      }
    
      get musicas(): FormArray{
        return this.pessoaForm.get('musicas') as FormArray;
      }
    
      pushMusicas() {
        this.musicas.push(
          this.fb.group({
            nome: ['', [Validators.required]],
            artista: ['', [Validators.required]],
          })
        )
      }
    
      removeMusicas(i: number){
        this.musicas.removeAt(i);
      }
    }

(classe-principal.ts)

    import { Component } from '@angular/core';
    import {PessoaFormControllerService} from "./pessoa-form-controller-service.service";
    
    @Component({
      selector: 'app-form-builder-external-with-service',
      template: `
          <form [formGroup]="pessoaForm.pessoaForm">
              Nome: <input type="text" formControlName="nome"><br>
              Email: <input type="text" formControlName="email"><br>
              Endereco: <br>
              <div formGroupName="endereco">
                Rua: <input type="text" formControlName="rua"><br>
                Numero: <input type="text" formControlName="numero">
              </div>
              <button (click)="pessoaForm.pushMusicas()">Add Musica</button>
              <div formArrayName="musicas">
                <div *ngFor="let musica of pessoaForm.musicas.controls; let i = index" [formGroupName]="i">
                  Nome: <input type="text" formControlName="nome"><br>
                  Artista: <input type="text" formControlName="artista">
                  <button (click)="pessoaForm.removeMusicas(i)">Excluir musica</button>
                </div>
              </div>
              <p>{{pessoaForm.pessoaForm.value | json}}</p>
          </form>
      `,
      styleUrl: './form-builder-external-with-service.component.scss'
    })
    export class FormBuilderExternalWithServiceComponent {
    
      private _pessoaForm!: PessoaFormControllerService;
    
      // Aqui iremos injetar o serviço na classe
      constructor(private readonly pessoaFormControllerService: PessoaFormControllerService) {
        this._pessoaForm = this.pessoaFormControllerService;
      }
    
      // Fazemos getter e setter para podermos usar o service, ja que é uma boa pratica que
      // as injeções sejam privadas e readonly.
      get pessoaForm(){
        return this._pessoaForm;
      }
      set pessoaForm(value: any){
        this._pessoaForm = value;
      }
    }
```

### Form com Componentes Filhos

- Podemos ter um formulário em um componente e os formControls e formGroups em componentes separados.
- Para isto, devemos tomar algumas providencias para que o formulário funcione corretamente.

```ts
(formulario-principal.ts)

    import { Component } from '@angular/core';
    import {FormControl, FormGroup, Validators} from '@angular/forms';
    
    @Component({
      selector: 'app-form-with-children',
      template: `
      <form [formGroup]="pessoaForm">
          Nome: <input type="text" formControlName="pessoa"><br>
        <!--  SEMPRE QUE CRIAR UM ELEMENTO FILHO, TEMOS QUE PASSAR UMA INSTANCIA DO FORMULARIO PARA O FILHO-->
        <!--  VIA INPUT, PARA PODER REFERENCIAR O FORM-->
          <app-entereco [pessoaForm]="pessoaForm"></app-entereco>
          <button (click)="markTouch()">Touch Nome</button>
          <button (click)="enviar()">Enviar</button>
      </form>
      `,
      styleUrl: './form-with-children.component.scss'
    })
    export class FormWithChildrenComponent {
    
      pessoaForm = new FormGroup({
        pessoa: new FormControl('', [Validators.required]),
        endereco: new FormGroup({
          rua: new FormControl('', []),
          numero: new FormControl('', [])
        })
      })

      enviar() {
        console.log(this.pessoaForm.status)
      }
    
      markTouch() {
        // esse exemplo serve para todas outras funçoes "markAs"
        this.pessoaForm.get('pessoa')?.markAsTouched({
          // marca como tocado apenas o pessoa, sem marcar como touched o form
          onlySelf: true
        })
        // para atualizar os validadores e status
        this.pessoaForm.updateValueAndValidity();
      }
    }

(componente-filho.ts)

    import {Component, Input} from '@angular/core';
    import {FormGroup} from "@angular/forms";
    
    @Component({
      selector: 'app-entereco',
      template: `
      <!-- DENTRO DO COMPONENTE FILHO REFERENCIAMOS O FORMULARIO-->
      <div [formGroup]="pessoaForm">
        <div formGroupName="endereco">
          Rua: <input type="text" formControlName="rua"><br>
          Numero: <input type="text" formControlName="numero"><br>
        </div>
      </div>
      `,
      styleUrl: './entereco.component.scss'
    })
    export class EnterecoComponent {
      @Input({required:true}) pessoaForm!: FormGroup;
    }
```

### Validadores Assincronos

- O processo de criação de validadores assincronos é exatamente o mesmo que em template driven forms.
- A única diferença é na hora de atribuir o validador a um control, group ou array:

```ts
    import { Component } from '@angular/core';
    import {FormControl} from "@angular/forms";
    import {UserValidatorService} from "./user-validator.service";
    
    @Component({
      selector: 'app-async-validator',
      templateUrl: './async-validator.component.html',
      styleUrl: './async-validator.component.scss'
    })
    export class AsyncValidatorComponent {
    
      constructor(private readonly userValidatorService: UserValidatorService) {}
    
      // Para nao perder a referencia do this no validator, devemos usar SEMPRE o .bind(this.validatorName)
    
      nome = new FormControl('', {
        asyncValidators: [this.userValidatorService.validate.bind(this.userValidatorService)],
        updateOn: 'blur'
      });
      
    }
```

### Cross Validator

- Para fazermos uma validação de dois valores ao mesmo tempo em um form, devemos colocar o validador
  no pai dos dois controls a serem validados.
- Desta maneira, teremos acesso aos controls e conseguiremos fazer a lógica necessária.

### Adicionar e Remover Controls dinamicamente

- Podemos adicionar um control a um grupo utilizando o método `addControl('nome', new FormControl(...))`
- Podemos remover um control a um grupo utilizando o método `removeControl('nome')`

## 8. STANDALONE

### Modularização Padrão do Angular

- São criados módulos estrategicamente, de modo que componentes do módulo são utilizados
  e apenas os componentes necessários são exportados do módulo (apenas os que precisam ser
  utilizados em outros locais).
- Tende a deixar o código bagunçado por depender de um padrão.
- Para fazer roteamento e lazy loading, acaba se tornando um código mais complexo, e com
  mais tendencia a ficar bagunçado.
- Para refatorar o código se torna custoso, pois as migrações podem se tornar confusas.

### Modularização SCAM - Single Component Angular Module

- É um sistema parecido com o Standalone.
- Este padrão foi criado antes da criação do standalone.
- A ideia deste padrão é deixar o componente independente, com um módulo por componente.
  - É importado o que é usado neste componente dentro do seu módulo.
  - É exportado o componente para ser usado em qualquer lugar.
- Acaba tendo mais código para fazer este padrão.
- O arquivo de Bundle acaba ficando muito grande, pois algumas coisas são carregadas
  sem precisar ser utilizadas.

### Standalone Project

- Cada componente, pipe, service, etc. é indepentende.
- Não possuimos o arquivo de app.module.ts
- Possuimos um arquivo de app.routes.ts
- O que é carregado através do bootstrap da aplicação é o app.component.ts

### Componentes Standalone

- Para usar um componente standalone dentro de outro, devemos importá-lo
  dentro do componente que deve ser utilizado.
- Dentro do seu import, podemos tambem importar módulos.
- O componente é ao mesmo tempo um componente e um módulo.

### Usando NgIf, NgFor, Pipes, ...

- Podem ser utilizadas importações separadas no componente.
- Pode ser importado o CommonModule, que possui todas diretivas e os Pipes.

### Criando um Pipe Standalone

- Ao criar o pipe, devemos definir o standalone como true.

### Criando uma Diretiva Standalone

- Ao criar a diretiva, devemos definir o standalone como true.

### Injeção de Dependencia com Standalone

- Funciona exatamente igual a injeção de dependencia modularizada.

### Modulos ou Standalone

- O standalone possui suas vantagens por ter mais liberdade na programação
  e nao precisar de dependencia de modulos, alem de gerar bundles menores.

#### Importante: ***Use APENAS componentes standalone ou APENAS componentes com módulos, isso evita a confusão e simplifica o código

## 9. ROTEAMENTO ESTÁTICO

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

## 10. ROTEAMENTO DINÂMICO COM ROUTERLINK E INPUT

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

## 11. ROTEAMENTO PROGRAMÁTICO COM ROUTER, GUARDS E RESOLVERS

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

## 12. OBSERVABLES E PROMISES

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

- ***Operador `tap`:***
  - Não modifica o fluxo de dados, apenas usado para logar dados.

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

## 13. CHAMADAS HTTP

### Maneira correta de manipular Headers:

- Use a classe `HttpHeaders()`.
- Ela cria apenas uma instância do header, lidando com concatenações, etc.
- Ex.:

```ts
import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  private readonly _httpClient = inject(HttpClient);

  public updateUser(userInfos: {
    username: string,
    password: string,
    email: string,
    name: string
  }): Observable<{ message: string, token: string }> {
      
      // INSTANCIANDO A CLASSE HEADERS, TEMOS ACESSO A TODOS MÉTODOS DELE.
      
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')!);
        
    return this._httpClient.put<{ message: string, token:string }>(
        `http://localhost:3000/update-user`, 
        userInfos, 
        {
            // AQUI ADICIONAMOS OS HEADERS DA REQUEST
            headers
        }).pipe(
      map((response) => {
        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }
}
```

- A classe `HttpHeaders()` possui os seguintes métodos:
  - `.set()`: Inclui no cabeçalho algum valor. Caso já exista uma chave com aquele
    valor no cabeçalho, ele sobrescreve.
  - `.append()`: Inclui no cabeçalho algum valor. Caso já existe uma chave com aquele
    valor no cabeçalho, ele concatena com uma `,`.
  - `.delete()`: Deleta algum valor do cabeçalho.
  - `.get()`: Pega o primeiro valor de uma key do cabeçalho.
  - `.getAll()`: Pega todos valores de uma key do cabeçalho.
  - `.has()`: Verifica se um valor existe no cabeçalho.
  - `.keys()`: Retorna todas chaves do cabeçalho.

### Ciclo de vida da HttpRequest no Angular:

- Entre o envio da Request e o recebimento da Response, existem outras mensagens
  trocadas pelo navegador e a API.
- Pode ser configurado o HttpClient para capturar estes eventos intermediarios,
  utilizando o HttpEvent.
- Configurando no parametro options da request:
  <br><br>
  - `observe: 'body'`: retorna diretamente o body do response, independente
    do parametro `reportProgress` ser `true` ou `false`
    <br><br>
  - `observe: 'response'`: retorna apenas a instância de HttpResponse, independente
    do parametro `reportProgress` ser `true` ou `false`.
    - HttpResponse possui parametros como:
      - body;
      - headers;
      - ok;
      - status;
      - statusText;
      - type;
      - url;
        <br><br>
  - `observe: 'events'`:
    - `reportProgress: false`: Recebe 2 eventos:
      1. `type: 0`: Indica que a requisição foi enviada, mas não existe resposta
      2. `HttpResponse`: É o evento que contem um elemento HttpResponse, todos seus parametros.
  - `observe: 'events'`:
    - `reportProgress: true`: Rececbe 5 eventos:
      1. `type: 0`: Indica que a requisição foi enviada, mas nao existe resposta.
      2. `type: 1`: Indica o progresso de upload. Indica tambem quantos
         bytes foram enviados e o total de bytes que deveriam ser enviados. Este evento pode ser disparado
         várias vezes conforme dados maiores. Pode ser usado para gerar barras de progresso. Só é realizado nos metodos POST.
      3. `HttpHeaderResponse`: É o evento que contem um elemento HttpHeaderResponse, que contem
         todas as propriedades do HttpResponse, menos o body. Útil para acessar e analizar
         os cabeçalhos antes de carregar o body.
      4. `type: 3`: Indica o progresso de download. Indica tambem quantos
         bytes foram enviados e o total de bytes que deveriam ser enviados. Este evento pode ser disparado
         várias vezes conforme dados maiores. Pode ser usado para gerar barras de progresso.
      5. `HttpResponse`: É o evento que contem um elemento HttpResponse, todos seus parametros.
      6. `HttpEventType.User`: É um evento reservado para eventos personalizados, que podem
         ser disparados por interceptors ou backends personalizados. É uma maneira de
         gerar e manipular eventos arbitrários durante o ciclo de vida da requisição.
         Não é emitido automaticamente, deve ser gerado programaticamente por desenvolvedores.

## 14. INTERCEPTORS

- São chamados após as requisições, antes de chegar no Backend.
- Pode redirecionar para outros interceptors, fazer um retry, tratar erros
  de forma global, ...
- Ex.:

```ts
  import {HttpContextToken, HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest} from "@angular/common/http";
  import {Observable} from "rxjs";
  
  export const AUTH_TOKEN_ENABLED = new HttpContextToken<boolean>(() => true);
  export function authInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn): Observable<HttpEvent<unknown>>
  {
  
    const APPLY_AUTH_TOKEN = req.context.get(AUTH_TOKEN_ENABLED);
  
    let newReq = req;
  
    if(APPLY_AUTH_TOKEN){
      newReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
    }
  
    return next(newReq)
  }
```

- Nunca podemos modificar diretamente a requisição. Sempre devemos fazer um clone.
- Se usarmos um `.pipe()` no next(), recebemos, por padrão, o HttpResponse com seus metodos e props.
- O `.pipe()` do interceptor é sempre realizado antes do `.pipe()` da implementação.
- Dependendo da configuração de `reportEvent`, pode retornar os outros passos da requisição.
- Para isto, `reportEvent` deve ser `true`. Esta configuração deve ser feita na implementação
  do serviço, não no interceptor.
- Para pegar todos eventos tanto no interceptor quanto na implementação, devemos colocar
  a opção `observe: 'events'`, que irá carregar todos eventos na seguinte ordem:
  1. Interceptor
  2. Service
  3. Implementação
- Caso nao vá retornar uma response, vá passar para outro interceptor, ele não executa o seu `.pipe`.
- Podemos tratar erros das seguintes maneiras:
  - ***Operador catchError:***
    - Caso exista no `.pipe`, cairá primeiro no catchError do Interceptor, após no do Service e
      após no da implementação, podendo ser tratado em qualquer um deles.
    - O operador `catchError` deve retornar um observable, podendo ser de erro ou de sucesso.
    - Caso retornarmos um `of()`, retornaremos um observable sucesso.
    - Caso retornarmos um `throwError()`, retornaremos um observable de erro.
  - ***throwError:***
    - Podemos parar a requisição a qualquer momento usando a função `throwError()`,
      que irá lançar um erro que pode ser pego através do `catchError`.
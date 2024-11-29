# Elementos HTML:

## Atributos:

- Setados no HTML, como, por exemplo, class, id, ...
- Tem 2 tipos, e cada elemento pode ou nao ter os dois, depende do elemento:
  - Atributos globais: class, id, etc...
  - Atributos de eventos: onclick, onmouseover, etc...

## Propriedades:

- Quando a página é renderizada, é gerada uma árvore de propriedades pelo DOM.
- Essa arvore de propriedades torna os elementos configuraveis pelo DOM através
de javascript/typescript.
- Exemplos: elemento.value, elemento.defaultValue, elemento.tagName, etc...

## Resumo: 

- Atributos são alterados diretamente no HTML.
- Propriedades são alteradas via javascript/typescript, e cada elemento possui um objeto
de propriedades para ser acessado, criado no momento da renderização do elemento.

---

## Property Binding

### [Property]="variable"

- Atribui a variável com a propriedade (direita para esquerda).
- É passado o valor da variável para a propriedade e renderizado o elemento.
- **Não passa o valor da propriedade para a variável!!!**

---

## Event Binding

### (Event)="function()" // (Event)="function($event)

- Atribui o evento a uma função (esquerda para direita).
- É passada uma função que vai ser executada quando o evento acontecer.

---

## Attribute Binding

### [attr.atribute]="variable"

- Atribui a variável com o atributo (direita para esquerda).
- É passado o valor da variável para o atributo diretamente.

---

## Style Binding

### [style.\<STYLENAME\>]="Variavel" (*variavel tem que ser string*)

- Adiciona um Style \<STYLENAME\> CSS do componente (como se fosse adicionar ao atributo style)
- É passado o valor da variável para a propriedade style dinamicamente

---

## Class Binding

### [class.\<CLASSNAME\>]="Variavel" (*variavel tem que ser boolean*)

- Adiciona uma classe \<CLASSNAME\> ao componente (como se fosse adicionar ao atributo class)
- É passada a classe ao lado de class., caso a variavel seja 'true',
a classe é renderizada.

### [class]="Variavel" -> variavel tem que ser string

- É passada a classe na variável, podendo ser uma ou mais classes.

### [class]="{ '\<CLASSNAME\>' : variavel }" (*variavel tem que ser boolean*)

- É passado um objeto com classes, sendo a key o nome da classe \<CLASSNAME\> e seu valor
um boolean para informar se ela é true ou false.

---

# Decorators Mais Comuns

## Decorator @Input()

- Recebe os dados do componente pai através de Property Binding
  - Ex.:

```

(child.component.ts)

  @Input() original: type = value;

(parent.component.html)

  <component
    [original]="newValue"
  ></component>

```

### Input('\<ALIAS\>')

- O valor de \<ALIAS\> é o nome da propriedade que vai ser usada para o Binding
  - Ex.:

```

(child.component.ts)

  @Input('alias') original: type = value;

(parent.component.html)

  <component
    [alias]="newValue"
  ></component>

```


### Input({required:true})

- Passando um objeto com required:true, faz com que o input seja obigado a ser
preenchido quando o componente for chamado.
- Gera um erro em tempo de compilação, ou seja, não gera erro em tempo de execução.
  - Ex.:

```

(child.component.ts)

  @Input({required:true}) original: type = value;

(parent.component.html)

  // Caso não seja definido um valor para o input [original]
  // um erro na compilação irá ocorrer.

  <component
    [original]="newValue"   
  ></component>

```

### Input({required: \<boolean\>, alias: \<string\>, transform: \<function\>})

- Required = Faz com que o Binding seja obrigatorio;
- Alias = Cria um alias para a propriedade;
- Transform = Recebe uma função que irá retornar um valor do mesmo tipo do Input, podendo
  transformar o valor recebido, como, por exemplo, retirar espaços, etc.
  - Ex.:

```

(child.component.ts)

  @Input({
    required:true,
    alias: 'alias',
    transform: (value) => {transformedValue},
  }) original: type = value;

(parent.component.html)

  <component
    [alias]="newValue"   
  ></component>

```

### Input com get e set

- Usar get e set para receber um input pode ser útil caso seja necessário 'modificar'
  o input antes de salvá-lo ou mesmo mostrá-lo.
- Pode ser alterado no setter, alterando o valor salvo, ou alterado no getter, alterando
  apenas o valor mostrado. (Ou em ambos)
  - Ex.:

```

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

## Decorator @Output()

- Envia dados do componente filho para o componente pai
  - Ex.:


```

(child.component.ts)

  // Define qual será o nome do output e qual tipo de evento vai emitir
  @Output() outputName = new EventEmmiter<emitType>()
  
  // Define uma função para emitir o evento
  functionChildName(){ this.outputName.emit(value: emitType) }
  
(child.component.html)

  // Define uma ação para disparar a função que emite o evento
  <div (click)="functionChildName()"><div>
  
(parent.component.html)

  // Recebe o evento com seu valor dentro de uma função a ser
  // usada dentro do componente pai
  <child (outputName)="functionParentName($event)"></child>
  
(parent.component.ts)

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

### Output('\<ALIAS\>')

- Passa um \<ALIAS\> para o Output. (*funciona do mesmo modo que para o input*)

---

# Two-Way-Data-Binding

- Sincroniza dois valores, mesclando Input() e Output() simultaneamente.
  - Ex.:

```
(component.html)
 
  <input type="text" [(ngModel)]="name" />
  <span> Nome digitado: {{ name }} </span>
 
(component.ts)

  public name: string = 'valor';
  

```

- [ngModel]="name"  ***(Input)***
- (ngModelChange)="handleName($event)"  ***(Output)***
- [(ngModel)]="name" ***(Input e Output)***
  - Todos métodos podem ser usados juntos!
  - Caso o output altere a variável e seja utilizado junto com ngModel,
    a prioridade é para a atribuição do **OUTPUT**!!

---

# Diretiva *ngIf="\<BOOLEAN\>"

- Realiza a renderização do elemento onde a diretiva está conforme o resultado.
- Caso seja false, nao renderiza o componente no DOM.
- Caso seja true, renderiza o componente no DOM.
- O Angular fica sempre verificando esse valor, sendo possível tornar um elemento
  visivel/invisível dinamicamente.
  - Ex.:

```

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

```
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

---

# Diretiva *ngFor="let item of items"

- Realiza uma renderização com um laço 'for' em um componente, baseado em dados.
  - Ex.:

```
(component.html)
  
  <div class="list">
    <div class="item" *ngFor="let person of listPeople">
      <p class="item__name">{{person.name}}</p>
      <p class="item__age">{{person.age}}</p>
    </div>
  </div>

(component.ts)

  listPeople = [
    {name: 'Felipe', age: 25},
    {name: 'Maria', age: 22},
    {name: 'Pedro', age: 23},
    {name: 'Antonio', age: 24},
  ];

```
### Mais Comum de ser utilizado
- *ngFor="let item of items; let i of index"
  - item é o valor iteravel dentro de items
  - i é o indice do array/objeto percorrido
  - **i tem que apontar sempre para INDEX** *(não pode ser outro nome)*

## Outras props:

```

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
---

# Diretiva de atributo NgStyle

- Deixa as propriedades passadas para ele de forma dinâmica.
- O angular fica monitorando por mudanças de atributo para renderizar em tempo de execução.
  - Ex.:

```
(component.html)
  
  <h1 [ngStyle]="{
    'font-size': fontSize + 'px',
    'color': textColor,
  }">
    TEXTO COM STYLES DINAMICOS
  </h1>

(component.ts)

  // Se esses atributos forem mudados em tempo de execução, o angular atualizara quase instantaneamente
  // como estilos do elemento
  
  fontSize: number = 15;
  textColor: 'white' | 'orange' = 'white'

```
---
# Diretiva de atributo NgClass

- Deixa as classes passadas atuando de forma dinâmica.
- O angular fica monitorando por mudanças de classes para renderizar em tempo de execução.
- Pode receber um objeto relacionando classes com booleanos (true ou false para definir se serão renderizadas)
- Pode receber uma string de classes, separadas por um espaço ('class1 class2 class3')
- Pode receber um array de classes (['classe1', 'classe2', 'classe3'])
- Pode receber um objeto de classes com booleanos ({'class1 class2' : true, 'class3' : true, 'class4' : false})
  - Ex.:

```

(component.html)
  
  <h1 [ngClass]="{
    'is-green': isGreen',
    'is-white': !isGreen,
  }">
    TEXTO COM CLASSE DINAMICA
  </h1>

(component.ts)
  
  // Se esses atributos forem mudados em tempo de execução, o angular atualizara quase instantaneamente
  // como classe do elemento
  
  isGreen: boolean = false;
  toogleColor(){
    this.isGreen = !this.isGreen;
  }

(component.scss)
  
  .is-white{
    color = white;
  }
  
  .is-green{
    color = green;
  }

```
---
# Introdução aos Pipes

## Para que servem e como usar:

- Transformam um valor eemm outro valor, reduzindo a logica dentro do template e atribuindo
  ao pipe.
- O angular fornece alguns pipes, como, por exemplo, 'uppercase', que transforma o texto
  para uppercase, 'json', que mostra um objeto sem precisar iterar sobre ele, ...
  - Ex.:

```

(component.html)

  <h1>{{ text | uppercase }}</h1>
  // Resultado será TEXTO
  
  <h1>{{ object | json }}</h1>
  // Resultado será { "name": "Nome", "age": 25 }
  // Sem a pipe seria [Object object]

(component.ts)

  text: string = 'texto';
  object = {
    name: 'Nome',
    age: 25
  };


```

## Como criar um Pipe:

- A Pipe é uma classe e terá um decorator @Pipe({...}) para identificar ela.
- Dentro do decorator, terá uma configuração de 'name', que é o nome que
  será usado para usar a pipe no código. O nome deve fazer sentido e ser parecido
  com o nome da classe.
- Ela implementará a classe PipeTransform, que implementa o método 'transform'.
- O método transform recebe valor/valores e retorna valor/valores.
- Deve ser importado no módulo onde vai ser usado, ou tornado standalone para
  ser importado nos componentes diretamente.
  - Ex.:

```

(status-class.pipe.ts)
  
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

(component.ts)
  
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

(component.scss)

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

(component.html)
  
  <h1 [class]="pessoa1.status | statusClass">{{ pessoa1.nome }}</h1> //Aplicada .active
  <h1 [class]="pessoa2.status | statusClass">{{ pessoa2.nome }}</h1> //Aplicada .partial
  <h1 [class]="pessoa3.status | statusClass">{{ pessoa3.nome }}</h1> //Aplicada .blocked


```

---
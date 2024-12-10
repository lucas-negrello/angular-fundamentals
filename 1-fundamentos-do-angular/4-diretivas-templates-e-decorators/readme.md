## Escopos e Parâmetros

### Como funciona:

- Um componente pai nao consegue acessar variaveis do escopo do componente filho;
- Um componente filho consegue acessar variaveis do escopo do componente pai;
- Ex. com funções em JS:

```

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

```


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

## Template Variables

### Para que serve:

- Ter acesso a propriedades de um componente filho de forma dinâmica.

### Como utilizar: ***(diretamente no HTML)***

- Usar o #\<NOME\> referencia o elemento a ser acessado;
- Usar o ngModel faz com que o Angular ative o changeDetection para o elemento,
  escutando as mudanças do elemento em tempo de execução;
- As propriedades podem ser acessadas através do uso de \<NOME\> referenciado
  no componente, seguido pela propriedade a ser acessada.
- Ex.: 

```

(component.html)

    <input type="text" #meuInput ngModel />
    <span> Valor: {{ meuInput.valor }} </span>
    
(module.ts)

    import {FormsModule} from "@angular/forms";
    
    @NgModule({
        imports: [
            FormsModule
        ]
    })
    export class Module{ }

```

### Como utilizar: ***(no Typescript)***

- As definições do componente no HTML serão iguais;
- No arquivo .ts podemos receber esse elemento através de uma função
  que retorne o proprio elemento, assim, temos acesso a ele dentro do
  arquivo para manipulações das propriedades.
- Ex.:

```

(component.html)

    <input type="text" #meuInput ngModel />
    <span> Valor: {{ meuInput.valor }} </span>
    <button (click)="onClick(meuInput)"> Receber Valor </button>
    
(component.ts)

    clicou(meuInput: HTMLInputElement){
    
        // PODEMOS ACESSAR AS PROPRIEDADES
        console.log(meuInput.value);
        
        // PODEMOS TAMBEM ALTERAR AS PROPRIEDADES
        meuInput.value = 'Novo texto';
    }

```

### Como utilizar: ***(@ViewChild)***

- As definições do componente no HTML serão iguais;
- No arquivo .ts recebemos o template variable dentro do @ViewChild('\<NOME\>');
- Apos definir a ViewChild, definimos como iremos chamá-la no .ts e sua tipagem.
- Ex.:

```

(component.html)

    <input type="text" #meuInput>
    
    <button (click)="updateInputText()">Atualizar</button>
    
(component.ts)

    @ViewChild('meuInput') meuInputElement!: ElementRef<HTMLInputElement>;
    
    updateInputText(){
        this.meuInputElement.nativeElement.value = 'Novo texto!';
    }

```

### Como acessar atributos e métodos do componente referenciado:

- Com @ViewChild() podemos acessar os métodos e alterar os atributos de um componente.
- Ex.:


```

(filho.ts)

  public attribute: string = 'some value';
  public method(value: string) {
    console.log(value);
  }
  
(pai.html)

  <filho #filhoRef></filho>
  
(pai.ts)

  @ViewChild('filhoRef') filho!: FilhoComponent;

  // METODO DO PAI QUE QUANDO ATIVADO IRÁ ACIONAR UMA
  // FUNÇÃO CRIADA NO FILHO, QUE IRÁ ACESSAR UM
  // ATRIBUTO CRIADO NO FILHO
  
  altFilhoMethod(){
    this.filho.method( this.filho.attribute );
  }

```

### Acessar child na renderização do componente:

- Caso tentamos acessar o componente com @ViewChild no constructor da classe,
  ou até mesmo no ngOnInit, teremos um erro, pois nessas etapas do componente,
  os binds ainda não foram resolvidos.
- Para resolver esse problema, devemos utilizar o ***ngAfterViewInit***, que irá executar
  a view após os binds estarem resolvidos, sem gerar erros.
- Ex.:

```

(component.html)

  Meu Input:
    <input
      type="text"
      *ngIf="true"
      #meuInput>

(component.ts)

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

### Usando @ViewChildren()

- Usamos o @ViewChildren para referenciar varios elementos de uma única vez
  em um template.
- Podemos controlar individualmente cada componente, ou controlar todos ao mesmo tempo.
- Podemos alterar propriedades, verificar se alguma children foi excluida/incluida, ...
- Ex.:

```

(componente.html)

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


(componente.ts)

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

## Diretivas

### Por que utilizar diretivas:

- As diretivas servem para reunir funções e atributos que irão se repetir em vário lugares,
  facilitando a manutenção do código, além de deixar os componentes mais limpos.

### Como criar diretiva de atributo:

- As diretivas são classes que acessam os atributos e metodos de elementos/componentes que a usam;
- A diretiva @HostBinding() acessa e modifica os atributos de um elemento;
- A diretiva @HostListener() acessa metodos de um elemento, executando funções;
- De forma geral, todos atributos, propriedades e metodos de um elemento que são acessiveis no DOM 
  e com property binding, também são acessíveis pelas diretivas.
- Ex.:

```

(component.html)

  <p directiveName> Component with directive </p>

(directive.ts)
  
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

```

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

```

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

```

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

### Como passar valores para as Diretivas

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

```

(component.html)

  <input
    [appInputBackground] = "backgroundVar"  // passa uma variável - property
    tColor = "white"  // passa uma string - attribute
  >
  
  <input
    appInputBackground = "blue" // passa uma string - attribute
    [tColor] = "colorVar" // passa uma variável - property
  >
  
(component.ts)

  backgroundVar = 'green';
  colorVar = 'gray';
  
(directive.ts)

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

## ElementRef

### Como funciona o ElementRef em componentes

- O ElementRef funciona como o document em Javascript, permitindo acesso ao DOM;
- Ele é mais específico, permitindo acesso ao DOM do componente.
- Pode ser passado com um ViewChild, ou como uma injeção de dependencia;
- Pode ser injetado dentro de uma diretiva também, para manipulações mais complexas;
- Não podemos fazer a injeção de dependencia de um ElementRef dentro de um service;
- Para usar dentro de um service, devemos passar como parâmetro dentro do método do service;
- Ex.:

```

(component.html)

  <div #minhaDiv></div>

  <div id="minha-outra-div"></div>
  
(component.ts)

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

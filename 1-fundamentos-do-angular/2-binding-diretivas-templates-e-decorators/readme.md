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

-------------

# Property Binding

## [Property]="variable"

- Atribui a variável com a propriedade (direita para esquerda).
- É passado o valor da variável para a propriedade e renderizado o elemento.
- **Não passa o valor da propriedade para a variável!!!**

# Event Binding

## (Event)="function()" // (Event)="function($event)

- Atribui o evento a uma função (esquerda para direita).
- É passada uma função que vai ser executada quando o evento acontecer.

# Attribute Binding

## [attr.atribute]="variable"

- Atribui a variável com o atributo (direita para esquerda).
- É passado o valor da variável para o atributo diretamente.

# Style Binding

## [style.STYLENAME]="Variavel" -> variavel tem que ser string

- Adiciona um Style CSS do componente (como se fosse adicionar ao attr style)
- É passado o valor da variável para a propriedade style dinamicamente

# Class Binding

- Adiciona uma classe ao componente (como se fosse adicionar ao attr class)

## [class.CSSCLASS]="Variavel" -> variavel tem que ser boolean

- É passada a classe ao lado de class., caso a variavel seja 'true',
a classe é renderizada.

## [class]="Variavel" -> variavel tem que ser string

- É passada a classe na variável, podendo ser uma ou mais classes.

## [class]="{ 'CSSCLASS' : variavel }" -> variavel tem que ser boolean

- É passado um objeto com classes, sendo a key o nome da classe e seu valor
um boolean para informar se ela é true ou false.

--------------

# Decorator @Input()

- Recebe os dados do componente pai através de Property Binding

## Input('ALIAS')

- O valor de ALIAS é o nome da propriedade que vai ser usada para o Binding
  - ex.: @Input('alias') original: type = value;
    - [alias]="newValue"

## Input({required:true})

- Passando um objeto com required:true, faz com que o input seja obigado a ser
preenchido quando o componente for chamado.
- Gera um erro em tempo de compilação, ou seja, não gera erro em tempo de execução.

## Input({required, alias, transform})

- Required = Faz com que o Binding seja obrigatorio;
- Alias = Cria um alias para a propriedade;
- Transform = Recebe uma função que irá retornar um valor do mesmo tipo do Input, podendo
transformar o valor recebido, como, por exemplo, retirar espaços, etc.

## Input com get e set

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

# Decorator @Output()

- Envia dados do componente filho para o componente pai
  - ex.: @Output() outputName = new EventEmmiter<emitType>()
  - functionName(){ this.outputName.emit(value: emitType) }
  - <tag (event)="functionName()"></tag>
    - outputName -> Nome do output a ser acessado no pai.
    - \<emitType\> -> Tipo de retorno que .emit() pode mandar.
    - functionName -> Função que irá emitir o evento.
    - (event) -> Evento que irá disparar a função para acionar o evento.

## Output('ALIAS')

- Passa um ALIAS para o Output

## (outputName)="functionHandle($event)"

- Recebe o valor passado dentro do emissor .emit(...) do @Output
- Esse evento na função é um valor que ela recebe do mesmo tipo emitido pelo @Output em \<emitType\>

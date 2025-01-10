## Template Driven Forms

- É usada para formulários com validações mais simples,
  tratando o dado com o ngModel
- Usando a diretiva ngModel, teremos acesso a varios métodos
  da diretiva, como `valid`, `touched`, `dirty`, `value`, etc.
- Ex.:

```html
(component.html)

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

(component.ts)

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

### Propriedades e como usar o TemplateDriven Forms

#### Formulário:

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

#### Grupos

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

#### Models

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

#### Propriedades e Métodos comuns:

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

#### Criando um ngModel Standalone dentro de um formulário

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

#### Referenciando ngModels ou ngModelGroups em componentes separados ao formulário

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

#### Criando Validações Síncronas:

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

#### Criando Validações Assincronas:

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
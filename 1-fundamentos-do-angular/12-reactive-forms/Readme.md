## Reactive Forms

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

```angular181html
(component.html)

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
```ts
(component.ts)

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
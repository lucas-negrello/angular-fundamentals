## O problema com a projeção de conteúdo padrão

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

## \<ng-container\> vs. \<ng-template\>

### \<ng-container\>

- A tag de ng-container não será renderizada no DOM;
- É inicializado automaticamente;

### \<ng-template\>

- A tag de ng-template, ao ser inicializada, também não é renderizada no DOM;
- Não é inicializado automaticamente, apenas quando especificar utilizando a
  diretiva ngTemplateOutlet;

## Inicializando um \<ng-template\>

### Através de outro componente, com Template Variable

- O template será carregado dentro do container, disparando o método
  onInit dos componentes dentro do template.

```angular2html
    <ng-container *ngTemplateOutlet="template"></ng-container>

    <ng-template #template>
        MEU TEMPLATE
    </ng-template>
```

### Através de uma condicional, com dois Templates

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

### Utilizando uma conditional e a templateOutlet no mesmo container

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

### Sem precisar usar o ngIf

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

### Inicializando o componente automaticamente

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

## Como Passar um ng-template via @Input() para outro componente

- Podemos passar um ng-template via @Input() de um componente para outro.
- O @Input será do tipo TemplateRef<any>

```
(pai.html)

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

(filho.ts)

    @Input() header!: TemplateRef<any>;
    @Input() body!: TemplateRef<any>;
    @Input() footer!: TemplateRef<any>;
  
(filho.html)

    <ng-container *ngTemplateOutlet="header"></ng-container>
    <ng-container *ngTemplateOutlet="body"></ng-container>
    <ng-container *ngTemplateOutlet="footer"></ng-container>
```
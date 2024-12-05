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

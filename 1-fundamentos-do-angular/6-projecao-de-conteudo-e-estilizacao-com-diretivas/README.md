## Projeção Básica de Conteúdo

### \<ng-content\>PROJEÇÃO\</ng-content\>

- Criamos dentro de onde gostariamos de projetar um conteúdo;
- O conteúdo será projetado dentro do filho através do pai, dentro de
  ng-content.
- Ex.:

```html
(filho.html)

    <div class="filho">
        <ng-content>
        </ng-content>
    </div>

(pai.html)

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

```html
(filho.html)

    <div class="filho">
        <ng-content select=".text">
        </ng-content>
    </div>
    <ng-content select=".subtitle"></ng-content>

(pai.html)

    <app-filho>
        <p class="text">Paragrafo dentro</p>
        <p class="subtitle">Paragrafo fora</p>
    </app-filho>

// O resultado será uma div com o <p>Paragrafo dentro</p> dentro
// e um <p>Paragrafo fora</p> fora da div, logo após,
// todos dentro do seletor de app-filho
```

#### Por tag:

```html
(filho.html)

    <div class="filho">
        <ng-content select="p">
        </ng-content>
    </div>
    <ng-content select="button"></ng-content>

(pai.html)

    <app-filho>
        <p>Paragrafo dentro</p>
        <button>Botão fora</button>
    </app-filho>

// O resultado será uma div com o <p>Paragrafo dentro</p> dentro
// e um <button>Botão fora</button> fora da div, logo após,
// todos dentro do seletor de app-filho
```

#### Por atributo:

```angular2html
(filho.html)

    <div class="filho">
        <ng-content select="[attrDentro]">
        </ng-content>
    </div>
    <ng-content select="[attrFora]"></ng-content>

(pai.html)

    <app-filho>
        <p attrFora>Paragrafo fora</p>
        <button attrDentro>Botão dentro</button>
    </app-filho>

// O resultado será uma div com o <p>Paragrafo fora</p> dentro
// e um <button>Botão dentro</button> fora da div, logo após,
// todos dentro do seletor de app-filho
```

### Estilizando os componentes projetados

- Só podemos estilizar o conteúdo projetado através do componente pai, ou seja,
  o componente que implementa a projeção de conteúdo.
- As modificações da "casca", será carregada para a "casca", porém, o que varia,
  ou seja, a projeção, deve ser alterada pelo pai.

## Diretiva com seletor de elementos

- Podemos criar uma @Directive que possua um seletor de elemento, se passando por uma tag

### Modificando textos

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


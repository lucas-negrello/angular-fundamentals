<h1>ANGULAR</h1>

<p>Neste documento, é apresentada uma breve documentação sobre como utilizar o framework Angular corretamente.</p>
<p>Este documento foi construido baseado nas versões 17 e 18 do Angular. </p>

<hr/>

<h2>SUMÁRIO</h2>

- [COMPONENTES E ESTILIZAÇÕES](#1-componentes-e-estilizações)
  - [Componente](#componente)
  - [Módulos](#módulos)
- [BINDING, DIRETIVAS, TEMPLATES E DECORATORS](#2-binding-diretivas-templates-e-decorators)

- [PROJEÇÃO DE CONTEÚDO E ESTILIZAÇÃO COM DIRETIVAS](#3-projeção-de-conteúdo-e-estilização-com-diretivas)

- [TÓPICOS AVANÇADOS DE PROJEÇÃO DE CONTEÚDO](#4-tópicos-avançados-de-projeção-de-conteúdo)

- [PIPES](5-pipes)

- [TEMPLATE DRIVEN FORMS](#6-template-driven-forms)

- [REACTIVE FORMS](#7-reactive-forms)

- [STANDALONE](#8-standalone)

- [ROTEAMENTO ESTÁTICO](#9-roteamento-estático)

- [ROTEAMENTO DINÂMICO COM ROUTERLINK E INPUT](#10-roteamento-dinâmico-com-routerlink-e-input)

- [ROTEAMENTO PROGRAMÁTICO COM ROUTER, GUARDS E RESOLVERS](#11-roteamento-programático-com-router-guards-e-resolvers)

- [OBSERVABLES E PROMISES](#12-observables-e-promises)

- [CHAMADAS HTTP](#13-chamadas-http)

- [INTERCEPTORS](#14-interceptors)

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

### Regras

- Componentes só podem ser declarados em um módulo. Para utilizar em outro módulo:
  - Exportar o componente no seu módulo.
  - No módulo onde deseja usar o componente, importar o **MODULO** do componente.
    - Modulos sempre se importam!
  - Desse modo, tudo que for exportado no módulo importado, pode ser usado no outro módulo.

-------

## 2. BINDING, DIRETIVAS, TEMPLATES E DECORATORS

## 3. PROJEÇÃO DE CONTEÚDO E ESTILIZAÇÃO COM DIRETIVAS

## 4. TÓPICOS AVANÇADOS DE PROJEÇÃO DE CONTEÚDO

## 5. PIPES

## 6. TEMPLATE DRIVEN FORMS

## 7. REACTIVE FORMS

## 8. STANDALONE

## 9. ROTEAMENTO ESTÁTICO

## 10. ROTEAMENTO DINÂMICO COM ROUTERLINK E INPUT

## 11. ROTEAMENTO PROGRAMÁTICO COM ROUTER, GUARDS E RESOLVERS

## 12. OBSERVABLES E PROMISES

## 13. CHAMADAS HTTP

## 14. INTERCEPTORS

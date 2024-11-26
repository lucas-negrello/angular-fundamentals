# Componente

## O que é:

- Uma lógica que deve ser reutilizada em outros locais diferentes.
- Pode receber variáveis.

## Propriedade dos componentes:

```

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

# Módulos

## O que é:

- Utilizado para organizar componentes que tem lógicas similares.

## Propriedade dos módulos:

```

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

### Comparação:

*Uma estante de livros*

- A estante é a aplicação
- As divisões de seções são os módulos (ex.: terror, suspense, ...)
- Os livros são os componentes
  - Livros de terror devem estar na seçao de terror, etc...

------

## Regras

- Componentes só podem ser declarados em um módulo. Para utilizar em outro módulo:
  - Exportar o componente no seu módulo.
  - No módulo onde deseja usar o componente, importar o **MODULO** do componente.
    - Modulos sempre se importam!
  - Desse modo, tudo que for exportado no módulo importado, pode ser usado no outro módulo.

-------
